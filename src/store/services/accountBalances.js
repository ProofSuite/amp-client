import { utils, Contract } from 'ethers';
import { ERC20Token } from 'proof-contracts-interfaces';
import { getProvider } from './provider';

export async function subscribeEtherBalance(address, callback) {
  const { provider } = await getProvider();
  const handler = balance => callback(utils.formatEther(balance));
  provider.on(address, handler);

  return () => {
    provider.removeListener(address, handler);
  };
}

export async function subscribeTokenBalance(address, token, callback) {
  const { provider } = await getProvider();
  const contract = new Contract(token.address, ERC20Token.abi, provider);

  const handler = async (sender, receiver, tokens) => {
    if (receiver === address) {
      const receiverBalance = await contract.balanceOf(receiver);
      callback(utils.formatEther(receiverBalance));
    }
  };

  contract.ontransfer = handler;

  return () => {
    provider.removeListener(handler);
  };
}

export async function subscribeTokenTransfers(address, token, callback) {
  const { provider } = await getProvider();
  const contract = new Contract(token.address, ERC20Token.abi, provider);

  const handler = async (sender, receiver, tokens) => {
    if (receiver === address) callback({ sender, receiver, tokens });
  };

  contract.ontransfer = handler;

  return () => {
    provider.removeListener(handler);
  };
}
