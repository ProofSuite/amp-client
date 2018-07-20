import model from './accountBalances';
import * as eventCreators from './accountBalances';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const accountBalancesModel = getModel([eventCreators.initialized()]);

  expect(accountBalancesModel.get()).toEqual(null);
  expect(accountBalancesModel.isSubscribed()).toEqual(false);
});

it('handles subscribed event properly', () => {
  const accountBalancesModel = getModel([eventCreators.initialized(), eventCreators.subscribed('REQ')]);

  expect(accountBalancesModel.get('REQ')).toEqual(null);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(true);
  expect(accountBalancesModel.isAllowed('REQ')).toEqual(false);
});

it('handles updated event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(1000);
  expect(accountBalancesModel.get('TRX')).toEqual(2000);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesModel.isSubscribed('TRX')).toEqual(false);
  expect(accountBalancesModel.isAllowed('REQ')).toEqual(false);
  expect(accountBalancesModel.isAllowed('TRX')).toEqual(false);
  expect(accountBalancesModel.balancesArray()).toEqual([
    { symbol: 'REQ', balance: 1000, allowed: false },
    { symbol: 'TRX', balance: 2000, allowed: false },
  ]);
});

it('handles allowances event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.allowancesUpdated([{ symbol: 'REQ', allowance: -1 }, { symbol: 'TRX', allowance: -1 }]),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(1000);
  expect(accountBalancesModel.get('TRX')).toEqual(2000);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesModel.isSubscribed('TRX')).toEqual(false);
  expect(accountBalancesModel.isAllowed('REQ')).toEqual(true);
  expect(accountBalancesModel.isAllowed('TRX')).toEqual(true);
  expect(accountBalancesModel.balancesArray()).toEqual([
    { symbol: 'REQ', balance: 1000, allowed: true },
    { symbol: 'TRX', balance: 2000, allowed: true },
  ]);
});

it('handles unsubscribed event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.subscribed('REQ'),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.unsubscribed('REQ'),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(1000);
  expect(accountBalancesModel.get('TRX')).toEqual(2000);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(false);
  expect(accountBalancesModel.isSubscribed('TRX')).toEqual(false);
});

it('handles subscribed event after updated event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.subscribed('REQ'),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(1000);
  expect(accountBalancesModel.get('TRX')).toEqual(2000);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(true);
  expect(accountBalancesModel.isSubscribed('TRX')).toEqual(false);
});
