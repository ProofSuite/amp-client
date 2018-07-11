import { utils } from 'ethers';

export const mockTxReceipt = {
  status: '0x1',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const mockFailedTxReceipt = {
  status: '0x0',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const mockEtherTxParams = {
  amount: 10e18,
  receiver: '0x14d281013d8ee8ccfa0eca87524e5b3cfa6152ba',
  gasPrice: 2e9,
  gas: 100000,
};

export const mockTransferTokensTxParams = {
  amount: 10e18,
  receiver: '0x14d281013d8ee8ccfa0eca87524e5b3cfa6152ba',
  gasPrice: 2e9,
  gas: 100000,
};

export const mockHash = '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e';
