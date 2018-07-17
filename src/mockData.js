import { utils } from 'ethers';

export const mockTxReceipt = {
  status: '0x1',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const mockTxReceipt2 = {
  status: '0x1',
  blockHash: '0x5225cc22ca9c8a6d77eeab0bd6802d7b80aae9c4315a23f2f00b4fb5b019bc21',
  blockNumber: '4132336',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x9b373da56b3a511cfd329fe0a4f833be8535a85465d0461792c7290ba7942741',
};

export const mockFailedTxReceipt = {
  status: '0x0',
  blockHash: '0x98887e6a4d3981430f5cd7ce5394e6a5bca15d0ff33cccd2b63cdcc1df297d70',
  blockNumber: '4132335',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e',
};

export const mockFailedTxReceipt2 = {
  status: '0x0',
  blockHash: '0x5225cc22ca9c8a6d77eeab0bd6802d7b80aae9c4315a23f2f00b4fb5b019bc21',
  blockNumber: '4132336',
  gasLimit: utils.bigNumberify(1000000),
  hash: '0x9b373da56b3a511cfd329fe0a4f833be8535a85465d0461792c7290ba7942741',
};

export const mockEtherTxParams = {
  amount: 10e18,
  receiver: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
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
export const mockHash2 = '0xef84afe5a43b81190ec676257261b930e1c3fc8e5002b813d7f514d01720e400';

export const mockAddress = '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47';

export const mockTokens = [
  { symbol: 'ETH', address: '0x0' },
  { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
].map((m, index) => ({ ...m, rank: index + 1 }));
