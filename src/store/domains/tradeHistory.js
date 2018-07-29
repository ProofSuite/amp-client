// @flow
import type Props from '../../types/tradeHistory';

const initialState: Props = {
  tradeHistory: [{}],
};

export const initialized = () => {
  const event = (state: Props = initialState) => state;
  return event;
};

export const dataSaved = (data: Props) => {
  const event = (state: Props) => ({
    ...state,
    tradeHistory: data.tradeHistory,
  });
  return event;
};

export default function model(state: Props) {
  return {
    getState: () => state,
    getTradeHistory: () => state.tradeHistory,
  };
}
