import { providers, utils } from 'ethers';

export function subscribeBalance(address, callback) {
  const provider = providers.getDefaultProvider('ropsten');
  const handler = balance => callback(utils.formatEther(balance));

  provider.on(address, handler);

  return () => {
    provider.removeListener(address, handler);
  };
}
