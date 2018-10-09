import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const tokensBySymbolTable = {
  '1000': {
    AE: {
      symbol: 'AE',
      address: addresses['1000']['AE'],
    },
    AION: {
      symbol: 'AION',
      address: addresses['1000']['AION'],
    },
    BAT: {
      symbol: 'BAT',
      address: addresses['1000']['BAT'],
    },
    BNB: {
      symbol: 'BNB',
      address: addresses['1000']['BNB'],
    },
    BTM: {
      symbol: 'BTM',
      address: addresses['1000']['BTM'],
    },
    DGX: {
      symbol: 'DGX',
      address: addresses['1000']['DGX'],
    },
    FUN: {
      symbol: 'FUN',
      address: addresses['1000']['FUN'],
    },
    GNT: {
      symbol: 'GNT',
      address: addresses['1000']['GNT'],
    },
    KCS: {
      symbol: 'KCS',
      address: addresses['1000']['KCS'],
    },
    KNC: {
      symbol: 'KNC',
      address: addresses['1000']['KNC'],
    },
    LOOM: {
      symbol: 'LOOM',
      address: addresses['1000']['LOOM'],
    },
    LRC: {
      symbol: 'LRC',
      address: addresses['1000']['LRC'],
    },
    MITH: {
      symbol: 'MITH',
      address: addresses['1000']['MITH'],
    },
    MKR: {
      symbol: 'MKR',
      address: addresses['1000']['MKR'],
    },
    NPXS: {
      symbol: 'NPXS',
      address: addresses['1000']['NPXS'],
    },
    OMG: {
      symbol: 'OMG',
      address: addresses['1000']['OMG'],
    },
    PPT: {
      symbol: 'PPT',
      address: addresses['1000']['PPT'],
    },
    PRFT: {
      symbol: 'PRFT',
      address: addresses['1000']['PRFT'],
    },
    REP: {
      symbol: 'REP',
      address: addresses['1000']['REP'],
    },
    SNT: {
      symbol: 'SNT',
      address: addresses['1000']['SNT'],
    },
    TRX: {
      symbol: 'TRX',
      address: addresses['1000']['TRX'],
    },
    WTC: {
      symbol: 'WTC',
      address: addresses['1000']['WTC'],
    },
    ZRX: {
      symbol: 'ZRX',
      address: addresses['1000']['ZRX'],
    },
  },
  '8888': {
    AE: {
      symbol: 'AE',
      address: addresses['8888']['AE'],
    },
    AION: {
      symbol: 'AION',
      address: addresses['8888']['AION'],
    },
    BAT: {
      symbol: 'BAT',
      address: addresses['8888']['BAT'],
    },
    BNB: {
      symbol: 'BNB',
      address: addresses['8888']['BNB'],
    },
    BTM: {
      symbol: 'BTM',
      address: addresses['8888']['BTM'],
    },
    DGX: {
      symbol: 'DGX',
      address: addresses['8888']['DGX'],
    },
    FUN: {
      symbol: 'FUN',
      address: addresses['8888']['FUN'],
    },
    GNT: {
      symbol: 'GNT',
      address: addresses['8888']['GNT'],
    },
    KCS: {
      symbol: 'KCS',
      address: addresses['8888']['KCS'],
    },
    KNC: {
      symbol: 'KNC',
      address: addresses['8888']['KNC'],
    },
    LOOM: {
      symbol: 'LOOM',
      address: addresses['8888']['LOOM'],
    },
    LRC: {
      symbol: 'LRC',
      address: addresses['8888']['LRC'],
    },
    MITH: {
      symbol: 'MITH',
      address: addresses['8888']['MITH'],
    },
    MKR: {
      symbol: 'MKR',
      address: addresses['8888']['MKR'],
    },
    NPXS: {
      symbol: 'NPXS',
      address: addresses['8888']['NPXS'],
    },
    OMG: {
      symbol: 'OMG',
      address: addresses['8888']['OMG'],
    },
    PPT: {
      symbol: 'PPT',
      address: addresses['8888']['PPT'],
    },
    PRFT: {
      symbol: 'PRFT',
      address: addresses['8888']['PRFT'],
    },
    REP: {
      symbol: 'REP',
      address: addresses['8888']['REP'],
    },
    SNT: {
      symbol: 'SNT',
      address: addresses['8888']['SNT'],
    },
    TRX: {
      symbol: 'TRX',
      address: addresses['8888']['TRX'],
    },
    WTC: {
      symbol: 'WTC',
      address: addresses['8888']['WTC'],
    },
    ZRX: {
      symbol: 'ZRX',
      address: addresses['8888']['ZRX'],
    },
  },
  default: {
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
    },
  },
};

export const tokensBySymbol = tokensBySymbolTable[DEFAULT_NETWORK_ID];
export const tokenSymbols = Object.keys(tokensBySymbol);
export const tokens = Object.values(tokensBySymbol);