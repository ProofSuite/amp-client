import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const networkIDs = ['1000', '8888', '4' ]

let tokensBySymbolTable = {}

for (let networkID of networkIDs) {
  tokensBySymbolTable[networkID] = {}

  for (let token in addresses[networkID]) {
    if (token !== 'Exchange') {
      tokensBySymbolTable[networkID][token] = {
        symbol: token,
        address: addresses[networkID][token]
      }
    }
  }
}

tokensBySymbolTable['default'] = {
  BNB: {
    symbol: 'BNB',
    address: '0xb1898736d417d520f5543d450dcbab3f552813c0',
  },
  OMG: {
    symbol: 'OMG',
    address: '0x7a084d6ed124207235dd88cf4b8641593df84615',
  },
  ZRX: {
    symbol: 'ZRX',
    address: '0x8db71b297519d6256be179fa7e0dbca745147fe4',
  },
  AE: {
    symbol: 'AE',
    address: '0x03a832c32dc306f26456b2771f243daaf552c923',
  },
  TRX: {
    symbol: 'TRX',
    address: '0xa7a5003186367ddd78bfd1da97591914e4923618',
  },
  MKR: {
    symbol: 'MKR',
    address: '0xd27a76b12bc4a870c1045c86844161337393d9fa',
  },
  BAT: {
    symbol: 'BAT',
    address: '0x9a0ce67b4e56a25c4e7daaf0b38fe115c2d91948',
  },
  REP: {
    symbol: 'REP',
    address: '0xd3b0d7d31eccbf434a7605a2d1531c4b3c734a17',
  },
  BTM: {
    symbol: 'BTM',
    address: '0x92efee50f0c1dc68a2b556aeecfb1cf75b1c66f0',
  },
  NPXS: {
    symbol: 'NPXS',
    address: '0xffe8d56b86eb2e7a7bf80d52bde4fe81f054988d',
  },
  WTC: {
    symbol: 'WTC',
    address: '0xa114dd77c888aa2edb699de4faa2afbe4575ffd3',
  },
  KCS: {
    symbol: 'KCS',
    address: '0x4bc89ac6f1c55ea645294f3fed949813a768ac6d',
  },
  GNT: {
    symbol: 'GNT',
    address: '0x9aef1ccfe2171300465bb5f752477eb52cb0c59d',
  },
  PPT: {
    symbol: 'PPT',
    address: '0x5d4e689fc50b5adce038f616286bc37e90098135',
  },
  SNT: {
    symbol: 'SNT',
    address: '0x6a77279bb88387204a8513f3cd2247b1c6b396c7',
  },
  DGX: {
    symbol: 'DGX',
    address: '0xf94a52f5cb4e6a15d2837a71ab2fd8288314b788',
  },
  MITH: {
    symbol: 'MITH',
    address: '0x5ef1a3097b688497819fc0923654ba05a0372bfe',
  },
  AION: {
    symbol: 'AION',
    address: '0x6521bd7b6b3b99d5a24668c14b382a776f58c9e1',
  },
  LOOM: {
    symbol: 'LOOM',
    address: '0x4e6abe26957718001d196496db09bd33b5ff30dc',
  },
  DAI: {
    symbol: 'DAI',
    address: '0x77da6a1ea1cf893ac9941f08bf9714b63c90298d',
  }
}

export const tokensBySymbol = tokensBySymbolTable[DEFAULT_NETWORK_ID];
export const tokenSymbols = Object.keys(tokensBySymbol);
export const tokens = Object.values(tokensBySymbol);