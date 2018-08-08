import accountBalancesDomain from './accountBalances';
import * as eventCreators from './accountBalances';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return accountBalancesDomain(state);
}
//TODO: need to run Commented tests after solving Account Balances Issue @line 56 and 36

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.get()).toEqual(null);
  expect(domain.isSubscribed()).toEqual(false);
});

it('handles subscribed event properly', () => {
  const domain = getDomain([eventCreators.initialized(), eventCreators.subscribed('REQ')]);

  expect(domain.get('REQ')).toEqual(null);
  expect(domain.isSubscribed('REQ')).toEqual(true);
  expect(domain.isAllowed('REQ')).toEqual(false);
});

it('handles updated event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
  ]);

  expect(domain.get('REQ')).toEqual(1000);
  expect(domain.get('TRX')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(false);
  expect(domain.isSubscribed('TRX')).toEqual(false);
  expect(domain.isAllowed('REQ')).toEqual(false);
  expect(domain.isAllowed('TRX')).toEqual(false);
  // expect(domain.balancesArray()).toEqual([
  //   { symbol: 'REQ', balance: 1000, allowed: false },
  //   { symbol: 'TRX', balance: 2000, allowed: false },
  // ]);
});

it('handles allowances event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.allowancesUpdated([{ symbol: 'REQ', allowance: -1 }, { symbol: 'TRX', allowance: -1 }]),
  ]);

  expect(domain.get('REQ')).toEqual(1000);
  expect(domain.get('TRX')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(false);
  expect(domain.isSubscribed('TRX')).toEqual(false);
  expect(domain.isAllowed('REQ')).toEqual(true);
  expect(domain.isAllowed('TRX')).toEqual(true);
  // expect(domain.balancesArray()).toEqual([
  //   { symbol: 'REQ', balance: 1000, allowed: true },
  //   { symbol: 'TRX', balance: 2000, allowed: true },
  // ]);
});

it('handles unsubscribed event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.subscribed('REQ'),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.unsubscribed('REQ'),
  ]);

  expect(domain.get('REQ')).toEqual(1000);
  expect(domain.get('TRX')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(false);
  expect(domain.isSubscribed('TRX')).toEqual(false);
});

it('handles subscribed event after updated event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.updated([{ symbol: 'REQ', balance: 1000 }, { symbol: 'TRX', balance: 2000 }]),
    eventCreators.subscribed('REQ'),
  ]);

  expect(domain.get('REQ')).toEqual(1000);
  expect(domain.get('TRX')).toEqual(2000);
  expect(domain.isSubscribed('REQ')).toEqual(true);
  expect(domain.isSubscribed('TRX')).toEqual(false);
});
