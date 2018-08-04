import tokenPairData from '../../jsons/tokenPairData.json';
import orders from '../../jsons/orders.json';
import trades from '../../jsons/trades.json';
import orderBookData from '../../jsons/orderBookData.json';

import { parseJSONToFixed, parseOrders, parseTrades, parseOrderBookData } from '../../utils/parsers';

function request(endpoint, options) {
  return fetch(`https://datoms.prftech.com${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'content-type': 'application/json',
      ...options.headers,
    },
    mode: 'cors',
    ...options,
  });
}

export const fetchTokens = async () => {
  const response = await request(`/tokens`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchToken = async address => {
  const response = await request(`/tokens/${address}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchPairs = async () => {
  const response = await request(`/pairs/`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchPair = async (quoteToken, baseToken) => {
  const response = await request(`/pairs/book/${baseToken}/${quoteToken}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchBalance = async address => {
  const response = await request(`/balances/${address}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchOrders = async address => {
  const response = await request(`orders/${address}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchTokenPairTrades = async (baseToken, quoteToken) => {
  const response = await request(`/trades/history/${baseToken}/${quoteToken}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export const fetchAddressTrades = async address => {
  const response = await request(`trades/${address}`);

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

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

export const getOrderBookData = async () => {
  const data = parseOrderBookData(orderBookData);
  return data;
};
