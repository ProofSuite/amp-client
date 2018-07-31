import tokenPairData from '../../jsons/tokenPairData.json';
import orders from '../../jsons/orders.json';
import trades from '../../jsons/trades.json';

import { parseJSONToFixed, parseOrders, parseTrades } from '../../utils/parsers';

export const getTokenPairData = async () => {
  const data = parseJSONToFixed(tokenPairData);
  return data;
};

export const getOrders = async () => {
  const data = parseOrders(orders);
  return data;
};

export const getTrades = async () => {
  const data = parseTrades(trades);
  return data;
};
