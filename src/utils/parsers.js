import { isFloat, isInteger, round } from './helpers';

export const parseJSONData = obj => {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      parseJSONData(obj[key]);
    } else if (typeof obj[key] === 'array') {
      obj[key].forEach(elem => parseJSONData(elem));
    } else {
      if (typeof obj[key] === 'string') {
        if (isFloat(obj[key])) {
          obj[key] = parseFloat(obj[key]);
        } else if (isInteger(obj[key])) {
          obj[key] = parseInt(obj[key]);
        }
      }
    }
  }

  return obj;
};

export const parseJSONToFixed = (obj, decimals = 2) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      parseJSONToFixed(obj[key], decimals);
    } else if (typeof obj[key] === 'array') {
      obj[key].forEach(elem => parseJSONToFixed(elem, decimals));
    } else if (typeof obj[key] === 'string') {
      if (isFloat(obj[key])) {
        obj[key] = round(obj[key], decimals);
      } else if (isInteger(obj[key])) {
        obj[key] = round(obj[key], decimals);
      }
    } else if (typeof obj[key] === 'number') {
      obj[key] = round(obj[key], decimals);
    }
  }

  return obj;
};

export const parseOrders = (orders, decimals = 2) => {
  let parsed = orders.map(order => ({
    time: order.createdAt,
    amount: round(order.amount, decimals),
    filled: round(order.amount, decimals),
    price: round(order.price, decimals),
    hash: order.hash,
    side: order.side,
    pair: order.pairName,
    type: order.type,
    status: order.status,
  }));

  return parsed;
};

export const parseTrades = (trades, decimals = 2) => {
  let parsed = trades.map(trade => ({
    time: trade.createdAt,
    price: round(trade.price, decimals),
    amount: round(trade.amount, decimals),
    hash: trade.hash,
    orderHash: trade.orderHash,
    type: trade.type,
    side: trade.side,
    pair: trade.pairName,
    maker: trade.maker,
    taker: trade.taker,
  }));

  return parsed;
};
