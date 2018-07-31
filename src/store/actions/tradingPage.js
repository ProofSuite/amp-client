// @flow
import type { TokenPairDataMap } from '../../types/tokens';
import type { Orders } from '../../types/orders';
import type { Trades } from '../../types/trades';
import type {
  UpdateTokenPairDataAction,
  UpdateOrdersTableAction,
  UpdateTradesTableAction,
} from '../../types/tradingPage';

const actionTypes = {
  updateTokenPairData: 'tradingPage/UPDATE_TOKEN_PAIR_DATA',
  updateTradesTable: 'tradingPage/UPDATE_TRADES_TABLE',
  updateOrdersTable: 'tradingPage/UPDATE_ORDERS_TABLE',
};

export function updateTokenPairData(tokenPairData: TokenPairDataMap): UpdateTokenPairDataAction {
  return {
    type: actionTypes.updateTokenPairData,
    payload: { tokenPairData },
  };
}

export function updateOrderTable(orders: Orders): UpdateOrdersTableAction {
  return {
    type: actionTypes.updateOrdersTable,
    payload: { orders },
  };
}

export function udpateTradesTable(trades: Trades): UpdateTradesTableAction {
  return {
    type: actionTypes.updateTradesTable,
    payload: { trades },
  };
}

export default actionTypes;
