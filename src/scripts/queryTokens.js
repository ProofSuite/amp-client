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

let contracts = { '8888': {}, '1000': {}, '4': {} };
let files = fs.readdirSync(truffleBuildPath);

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

fs.writeFileSync('../config/addresses.json', JSON.stringify(contracts), 'utf8');
