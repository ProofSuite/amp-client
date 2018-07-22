// @flow
import type { OrderFormState } from '../../types/orderForm';

const initialState: OrderFormState = {
  askPrice: 0,
  bidPrice: 0,
  totalQuoteBalance: 0,
  totalBaseBalance: 0,
  formName: '',
  quoteToken: '',
  baseToken: '',
  decimals: 7,
  loggedIn: false,
};

export const initialized = () => {
  const event = (state: OrderFormState = initialState) => state;
  return event;
};

export const saveData = (data: OrderFormState) => {
  const event = (state: OrderFormState) => ({
    ...state,
    askPrice: data.askPrice,
    bidPrice: data.bidPrice,
    totalQuoteBalance: data.totalQuoteBalance,
    totalBaseBalance: data.totalBaseBalance,
    formName: data.formName,
    quoteToken: data.quoteToken,
    baseToken: data.baseToken,
    decimals: data.decimals,
    loggedIn: data.loggedIn,
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
  };
}
