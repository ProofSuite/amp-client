// @flow

export type TxStatus = 'incomplete' | 'valid' | 'invalid' | 'sent' | 'reverted' | 'confirmed' | 'error';

export type Address = string;

export type TxHash = string;

export type TokenSymbol = string;

export type TxReceipt = {
  blockHash: string,
  blockNumber: string,
  gasLimit: Object,
  hash: string,
};

export type Token = {
  address: string,
  symbol: string,
};

export type TokenBalance = {
  symbol: string,
  balance: number,
};

export type Tokens = Array<Token>;
export type TokenBalances = Array<TokenBalances>;

export type BN = {
  div: any,
  mul: any,
}

export type Numberish = string | number;