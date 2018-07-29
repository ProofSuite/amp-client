//@flow
import type { TokenPairDataMap } from './tokens';

export type UpdateTokenPairDataAction = {
  type: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  payload: { tokenPairData: TokenPairDataMap },
};

export type TradingState = {};

export type LoadDataParams = {
  tokenId: string,
};

export type SingleOrderTypes = {
  order: Object,
  index: number,
  decimals: number,
};

export type TradingPageAction = UpdateTokenPairDataAction;
