// @flow
import type { CoinSearcherState } from '../../types/coinSearcher';
import { getObjectFromProperty } from '../../utils/helpers';
import getCoinSearcherModel from '../models/coinSearcher';
import type { State } from '../../types';

const initialState: CoinSearcherState = {
  loading: true,
  coinsList: { btc: [] },
  small: false,
  decimals: 7,
};

export const initialized = () => {
  const event = (state: CoinSearcherState = initialState) => state;
  return event;
};

export const saveData = (data: CoinSearcherState) => {
  const event = (state: CoinSearcherState) => ({
    ...state,
    loading: data.loading,
    decimals: data.decimals,
    coinsList: data.coinsList,
    small: data.small,
  });
  return event;
};

export const toggleStar = (data: Object) => {
  const event = (state: CoinSearcherState) => ({
    ...state,
    coinsList: data,
  });
  return event;
};

export default function model(state: CoinSearcherState) {
  return {
    getState: () => state,
    getCoinsList: () => state.coinsList,
  };
}
