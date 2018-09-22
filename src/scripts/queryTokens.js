// import fs from 'fs';
// import process from 'process'
// import path from 'path'
// import { rand, randInt } from '../utils/helpers';
// import tokenPairs from '../jsons/tokenPairs.json';
// import { utils } from 'ethers';

const fs = require('fs');
const path = require('path');
const utils = require('ethers').utils;
const TRUFFLE_BUILD_PATH = path.resolve('../../../amp-dex/build/contracts');
// process.argv[2] ||

console.log(TRUFFLE_BUILD_PATH);
let contracts = { '8888': {}, '1000': {} };
let files = fs.readdirSync(TRUFFLE_BUILD_PATH);

files.forEach((file, index) => {
  let address;
  let symbol;
  let json = JSON.parse(fs.readFileSync(`${TRUFFLE_BUILD_PATH}/${file}`, 'utf8'));

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
});

fs.writeFileSync('../config/addresses.json', JSON.stringify(contracts), 'utf8');
