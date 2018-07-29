// @flow
import type OrderFormProps from '../../types/orderForm';

const initialState: OrderFormProps = {
  askPrice: 0,
  bidPrice: 0,
  totalQuoteBalance: 0,
  totalBaseBalance: 0,
  formName: '',
  quoteToken: '',
  baseToken: '',
};

export const initialized = () => {
  const event = (state: OrderFormProps = initialState) => state;
  return event;
};

export const dataSaved = (data: OrderFormProps) => {
  const event = (state: OrderFormProps) => ({
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

export const buyLimit = (data: OrderFormProps) => {
  const event = (state: OrderFormProps) => ({
    ...state,
    loading: false,
  });
  return event;
};

export default function model(state: OrderFormProps) {
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
