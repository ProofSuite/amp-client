import { utils } from 'ethers';

export const receipt = {
  status: '0x1',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasUsed: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const failedTxReceipt = {
  status: '0x0',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasUsed: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const tx = {
  amount: 10e18,
  receiver: '0x14d281013d8ee8ccfa0eca87524e5b3cfa6152ba',
  gasPrice: 2e9,
  gas: 100000,
};

export const tokens = [
  { symbol: 'ETH', address: '0x0' },
  { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const tokenSymbols = ['ETH', 'EOS', 'WETH', 'ZRX'];

export const tokensBySymbol = {
  ETH: { symbol: 'ETH', address: '0x0' },
  EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
};

export const accountBalances = [
  { symbol: 'ETH', balance: '121', allowance: true },
  { symbol: 'EOS', balance: '234.213', allowance: false },
  { symbol: 'WETH', balance: '0.0032', allowance: false },
  { symbol: 'ZRX', balance: '12.453', allowance: true },
];

export const networks = [
  { name: 'Mainnet', id: 1 },
  { name: 'Ropsten', id: 3 },
  { name: 'Rinkeby', id: 4 },
  { name: 'Private', id: 1000 },
  { name: 'Private', id: 8888 },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const receiver = '0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5';

export const txHash = '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70';
