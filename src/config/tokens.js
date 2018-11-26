import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const networkIDs = ['1000', '8888', '4', '1']

export const defaultTokenDecimals = {
  AE: 18,
  BAT: 18,
  BNB: 18,
  DAI: 18,
  GNT: 18,
  KNC: 18,
  OMG: 18,
  ZRX: 18,
  TRX: 18,
  MKR: 18,
  REP: 18,
  BTM: 18,
  NPXS: 18,
  WTC: 18,
  KCS: 18,
  PPT: 8,
  SNT: 18,
  DGX: 9,
  MITH: 18,
  AION: 18,
  LOOM: 18,
  USDC: 6,
}

export const defaultTokens = [
  "AE",
  "BAT",
  "BNB",
  "DAI",
  "KNC",
  "LOOM",
  "LRC",
  "MITH",
  "MKR",
  "NPXS",
  "OMG",
  "PRFT",
  "REP",
  "SNT",
  "WETH",
  "WTC",
  "ZRX",
  "USDC",
]

let tokensBySymbolTable = {}

for (let networkID of networkIDs) {
  tokensBySymbolTable[networkID] = {}
  for (let token of defaultTokens) {
    if (addresses[networkID][token]) {
      tokensBySymbolTable[networkID][token] = {
        symbol: token,
        address: addresses[networkID][token],
        decimals: defaultTokenDecimals[token] || 18
      }
    }
  }
}

export const tokensBySymbol = tokensBySymbolTable[DEFAULT_NETWORK_ID];
export const tokenSymbols = Object.keys(tokensBySymbol);
export const tokens = Object.values(tokensBySymbol);