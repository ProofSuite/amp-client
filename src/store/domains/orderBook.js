// @flow
import type Props from '../../types/orderBook';

const initialState: Props = {
  sellOrderList: [{ price: 0, amount: 0 }],
  buyOrderList: [{ price: 0, amount: 0 }],
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: Props = initialState) => state;
  return event;
};

export const dataSaved = (data: Props) => {
  console.log('OrderBook data: ', data);
  const event = (state: Props) => ({
    ...state,
    sellOrderList: data.sellOrderList,
    buyOrderList: data.buyOrderList,
    quoteToken: data.quoteToken,
    baseToken: data.baseToken,
  });
  return event;
};

export default function model(state: Props) {
  return {
    getState: () => state,
    getSellOrderList: () => state.sellOrderList,
    getBuyOrderList: () => state.buyOrderList,
    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
  };
}
