import fs from 'fs';
import { rand, randInt } from '../utils/helpers';
import tokenPairs from '../jsons/tokenPairs.json';

const tokenPairNames = tokenPairs.pairs;

let result = {};

for (let pair of tokenPairNames) {
  result[pair] = {
    pair: pair,
    lastPrice: rand(0, 10000),
    change: rand(1, 5),
    high: rand(0, 12000),
    low: rand(0, 8000),
    volume: randInt(0, 1000000),
  };
}

fs.writeFile('tokenPairData.json', JSON.stringify(result), { encoding: 'utf8', flag: 'wx' }, err => {
  if (err) throw err;
  console.log('Filed saved');
});
