// @flow
import TradeHistoryModel from '../domains/tradeHistory';
import type { State, ThunkAction } from '../../types';

export default function getTradeHistoryModel(state: State) {
  return TradeHistoryModel(state.tradeHistory);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};
