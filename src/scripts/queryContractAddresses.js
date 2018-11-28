/**
 * This scripts generates a list of currently deployed addresses in the addresses.json file
 * It is useful for testing and queries the tokens that are deployed in the Exchange.sol
 * contract
 * The scripts the AMP_DEX_PATH to be set
 */
const fs = require('fs');
const path = require('path');
const utils = require('ethers').utils;
const truffleBuildPath = path.join(`${process.env.AMP_DEX_PATH}`, `/build/contracts`);

let contracts = { '8888': {}, '1000': {}, '4': {}, '1': {} };
let files = fs.readdirSync(truffleBuildPath);

// Configuration for testnets based on local truffle project
files.forEach((file, index) => {
  let address;
  let symbol;
  let json = JSON.parse(fs.readFileSync(`${truffleBuildPath}/${file}`, 'utf8'));

  if (json.networks['8888']) {
    if (file !== 'Owned.json' && file !== 'Migrations.json' && file !== 'SafeMath.json') {
      symbol = file.slice(0, -5);
      if (symbol === 'WETH9') symbol = 'WETH';

      address = json.networks['8888'].address;
      contracts['8888'][symbol] = utils.getAddress(address);
    }
  }

  if (json.networks['1000']) {
    if (file !== 'Owned.json' && file !== 'Migrations.json' && file !== 'SafeMath.json') {
      symbol = file.slice(0, -5);
      if (symbol === 'WETH9') symbol = 'WETH';
      address = json.networks['1000'].address;
      contracts['1000'][symbol] = utils.getAddress(address);
    }
  }

  if (json.networks['4']) {
    if (file !== 'Owned.json' && file !== 'Migrations.json' && file !== 'SafeMath.json') {
      symbol = file.slice(0, -5);
      if (symbol === 'WETH9') symbol = 'WETH';
      address = json.networks['4'].address;
      contracts['4'][symbol] = utils.getAddress(address);
    }
  }
});

// Configuration for mainnet tokens
  contracts['1'] = {
    "AE": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
    "BAT": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    "BNB": " 0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    "DAI": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    "Exchange": "0x3e74af98042dc0dc75c41731e178cf739c8cc5bb",
    "RewardPools": "0x654d7a6de5580e0c8bc34658cc5e471d55a864bd",
    "RewardCollector": "0x1ff2124b2a842257704e94c40214252ba646e3c7",
    "GNT": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    "KNC": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    "LOOM": "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    "LRC": "0xef68e7c694f40c8202821edf525de3782458639f",
    "MITH": "0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb",
    "MKR": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "NPXS": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    "OMG": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    "PRFT": "0xc5cea8292e514405967d958c2325106f2f48da77",
    "REP": "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    "SNT": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    "WETH": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "WTC": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
    "ZRX": "0xe41d2489571d322189246dafa5ebde1f4699f498",
    "TUSD": "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e",
    "USDC": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  }


fs.writeFileSync('../config/addresses.json', JSON.stringify(contracts), 'utf8');
