// @flow
import { Contract, utils } from 'ethers';
import { ERC20Token } from 'proof-contracts-interfaces';
import { getProvider, getSigner } from './signer';

import type { Token, TokenBalances } from '../../types/common';

export async function queryEtherBalance(address: string) {
  const provider = getProvider();
  const balance = await provider.getBalance(address);
  return {
    symbol: 'ETH',
    balance: utils.formatEther(balance),
  };
}

export async function updateAllowance(tokenAddress: string, spender: string, address: string, balance: string) {
  const signer = getSigner();
  const contract = new Contract(tokenAddress, ERC20Token.abi, signer);
  await contract.approve(spender, parseFloat(balance));
  const allowance = await contract.allowance(address, spender);
  return { allowance: utils.formatEther(allowance) };
}

export async function queryTokenBalances(address: string, tokens: Array<Token>) {
  let balances;
  const provider = getProvider();
  console.log('provider: ', provider);

  const balancePromises = tokens.map(async token => {
    const contract = new Contract(token.address, ERC20Token.abi, provider);
    return await contract.balanceOf(address);
  });

  balances = await Promise.all(balancePromises);
  balances = (balances: TokenBalances).map((balance, i) => ({
    symbol: tokens[i].symbol,
    balance: utils.formatEther(balance),
  }));
  return balances;
}

export async function queryTokenAllowances(owner: string, spender: string, tokens: Array<Token>) {
  let allowances;
  const provider = getProvider();
  const allowancePromises = tokens.map(token => {
    const contract = new Contract(token.address, ERC20Token.abi, provider);
    return contract.allowance(owner, spender);
  });

  allowances = await Promise.all(allowancePromises);
  allowances = (allowances: TokenBalances).map((allowance, i) => ({
    symbol: tokens[i].symbol,
    allowance: utils.formatEther(allowance),
  }));

  return allowances;
}

export async function subscribeEtherBalance(address: string, callback: number => void) {
  const provider = getProvider();
  const initialBalance = await provider.getBalance(address);

  const handler = async balance => {
    if (balance !== initialBalance) callback(utils.formatEther(balance));
  };

  provider.on(address, handler);

  return () => {
    provider.removeListener(address, handler);
  };
}

export async function subscribeTokenBalance(address: string, token: Object, callback: number => void) {
  const provider = getProvider();
  const contract = new Contract(token.address, ERC20Token.abi, provider);

  const initialBalance = await contract.balanceOf(address);

  const handler = async (sender, receiver, tokens) => {
    if (receiver === address) {
      const balance = await contract.balanceOf(receiver);
      if (balance !== initialBalance) callback(utils.formatEther(balance));
    }
  };

  contract.ontransfer = handler;

  return () => {
    provider.removeListener(address, handler);
  };
}
