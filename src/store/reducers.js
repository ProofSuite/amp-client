import createReducer from './createReducer';
import etherBalanceActionTypes from './actions/etherBalance';
import providerActionTypes from './actions/provider';
import * as etherBalanceEvents from './domains/etherBalance';
import * as providerEvents from './domains/provider';

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

export const provider = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case providerActionTypes.setProvider:
      return providerEvents.providerSet(payload.options);
    case providerActionTypes.requestProvider:
      return providerEvents.providerRequested();
    case providerActionTypes.error:
      return providerEvents.providerError(payload.message);
    default:
      return providerEvents.initialized();
  }
});
