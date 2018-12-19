import fs from 'fs';
import { rand, randInt, round } from '../utils/helpers';
import tokenPairs from '../jsons/tokenPairs.json';
import { utils } from 'ethers';

let trades = [];
let buys = [];
let sells = [];
let { pairs } = tokenPairs;
let minTimeStamp = 1519990000000;
let maxTimeStamp = 1520000000000;
let minAmount = 1;
let maxAmount = 100;
let minPrice = 380;
let middlePrice = 400;
let maxPrice = 420;

const randomOrderSide = () => (randInt(0, 1) === 1 ? 'BUY' : 'SELL');
const randomOrderType = () => ['MARKET', 'LIMIT'][randInt(0, 1)];
const randomPair = () => pairs[randInt(0, 5)];
const randomAmount = () => rand(minAmount, maxAmount);
const randomTimestamp = () => randInt(minTimeStamp, maxTimeStamp);
const randomPrice = () => rand(minPrice, maxPrice);
const randomBidPrice = () => rand(minPrice, middlePrice);
const randomAskPrice = () => rand(middlePrice, maxPrice);
const randomHash = () => utils.sha256(utils.randomBytes(100));
const randomAddress = () => randomHash().slice(0, 42);
const roundToInteger = () => rand(0, 1) / 0.2 > 1;

let tradesNumber = rand(100, 200);
let buyNumber = rand(100, 200);
let sellNumber = rand(100, 200);

for (let i = 0; i < tradesNumber; i++) {
  let order = {
    amount: roundToInteger() ? round(randomAmount(), 0) : round(randomAmount(), 2),
    price: randomPrice(),
    type: randomOrderType(),
    side: randomOrderSide(),
    hash: randomHash(),
    orderHash: randomHash(),
    taker: randomAddress(),
    maker: randomAddress(),
    pairName: 'DAI_WETH',
    createdAt: randomTimestamp(),
  };

  trades.push(order);
}

for (let i = 0; i < buyNumber; i++) {
  let buy = {
    price: randomBidPrice(),
    volume: roundToInteger() ? round(randomAmount(), 0) : round(randomAmount(), 2),
  };

  buys.push(buy);
}

for (let i = 0; i < sellNumber; i++) {
  let sell = {
    price: randomAskPrice(),
    volume: roundToInteger() ? round(randomAmount(), 0) : round(randomAmount(), 2),
  };

  sells.push(sell);
}

let orderBookData = {
  buys,
  sells,
  trades,
};

fs.writeFile('orderBookData.json', JSON.stringify(orderBookData), 'utf8', err => {
  if (err) return console.log(err);
  console.log('File saved');
});
