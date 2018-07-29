// @flow
import type { OrderFormState } from '../../types/orderForm';

const initialState: OrderFormState = {
  formName: '',
  askPrice: 0,
  bidPrice: 0,
  totalQuoteBalance: 0,
  totalBaseBalance: 0,
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: OrderFormState = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderFormState) => {
  const event = (state: OrderFormState) => ({
    ...state,
    askPrice: data.askPrice,
    bidPrice: data.bidPrice,
    totalQuoteBalance: data.totalQuoteBalance,
    totalBaseBalance: data.totalBaseBalance,
    formName: data.formName,
    quoteToken: data.quoteToken,
    baseToken: data.baseToken,
  });
  return event;
};

export const buyLimit = (data: OrderFormState) => {
  const event = (state: OrderFormState) => ({
    ...state,
    loading: false,
  });
  return event;
};

export default function model(state: OrderFormState) {
  return {
    getState: () => state,
    getAskPrice: () => state.askPrice,
    getBidPrice: () => state.bidPrice,
    getTotalQuoteBalance: () => state.totalQuoteBalance,
    getTotalBaseBalance: () => state.totalBaseBalance,
    getFormName: () => state.formName,
    getQuoteToken: () => state.quoteToken,
    getBaseToken: () => state.baseToken,
  };
}
