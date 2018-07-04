import createReducer from './createReducer';
import etherBalanceActionTypes from './actions/etherBalance';
import * as etherBalanceEvents from './domains/etherBalance';

export const etherBalance = createReducer(action => {
  const { type, payload } = action;

  switch (type) {
    case etherBalanceActionTypes.subscribeBalance:
      return etherBalanceEvents.subscribed(payload.address);
    case etherBalanceActionTypes.unsubscribeBalance:
      return etherBalanceEvents.unsubscribed(payload.address);
    case etherBalanceActionTypes.updateBalance:
      return etherBalanceEvents.updated(payload.address, payload.balance);
    default:
      return etherBalanceEvents.initialized();
  }
});
