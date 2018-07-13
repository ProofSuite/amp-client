// @flow
import createReducer from './createReducer';
import etherBalanceActionTypes from './actions/etherBalance';
import accountBalancesActionTypes from './actions/accountBalances';
import providerActionTypes from './actions/provider';
import etherTxActionTypes from './actions/etherTx';
import tokensActionTypes from './actions/tokens';
import accountActionTypes from './actions/account';

import * as etherBalanceEvents from './domains/etherBalance';
import * as accountBalancesEvents from './domains/accountBalances';
import * as providerEvents from './domains/provider';
import * as etherTxEvents from './domains/etherTx';
import * as tokensEvents from './domains/tokens';
import * as accountEvents from './domains/account';

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

export const accountBalances = createReducer(action => {
  const { type, payload } = action;

  switch (type) {
    case accountBalancesActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol);
    case accountBalancesActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol);
    case accountBalancesActionTypes.updateBalance:
      console.log('updated', payload.symbol, payload.balance);
      return accountBalancesEvents.updated(payload.symbol, payload.balance);
    case accountBalancesActionTypes.clearBalances:
      return accountBalancesEvents.cleared();
    default:
      return accountBalancesEvents.initialized();
  }
});

export const provider = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case providerActionTypes.requestProvider:
      return providerEvents.providerRequested();
    case providerActionTypes.setProvider:
      return providerEvents.providerSet(payload.options);
    case providerActionTypes.error:
      return providerEvents.providerError(payload.message);
    default:
      return providerEvents.initialized();
  }
});

export const etherTx = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case etherTxActionTypes.etherTxError:
      return etherTxEvents.etherTxError(payload.status, payload.statusMessage);
    case etherTxActionTypes.validateEtherTx:
      return etherTxEvents.etherTxValidated(payload.statusMessage, payload.gas);
    case etherTxActionTypes.invalidateEtherTx:
      return etherTxEvents.etherTxInvalidated(payload.statusMessage);
    case etherTxActionTypes.revertEtherTx:
      return etherTxEvents.etherTxReverted(payload.statusMessage, payload.receipt);
    case etherTxActionTypes.sendEtherTx:
      return etherTxEvents.etherTxSent(payload.hash);
    case etherTxActionTypes.confirmEtherTx:
      return etherTxEvents.etherTxConfirmed(payload.receipt);
    default:
      return etherTxEvents.initialized();
  }
});

export const tokens = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case tokensActionTypes.updateToken:
      return tokensEvents.tokenUpdated(payload.symbol, payload.address);
    case tokensActionTypes.removeToken:
      return tokensEvents.tokenRemoved(payload.symbol);
    default:
      return tokensEvents.initialized();
  }
});

export const account = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case accountActionTypes.updateAccount:
      return accountEvents.accountUpdated(payload.address);
    case providerActionTypes.setProvider:
      return accountEvents.accountUpdated(payload.address);
    default:
      return accountEvents.initialized();
  }
});
