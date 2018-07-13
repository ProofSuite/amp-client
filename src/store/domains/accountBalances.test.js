import model, * as eventCreators from './accountBalances';

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
});

it('handles updated event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.subscribed('REQ'),
    eventCreators.updated('REQ', 1000),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(1000);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(true);
});

it('handles unsubscribed event properly', () => {
  const accountBalancesModel = getModel([
    eventCreators.initialized(),
    eventCreators.subscribed('REQ'),
    eventCreators.updated('REQ', 1000),
    eventCreators.unsubscribed('REQ'),
  ]);

  expect(accountBalancesModel.get('REQ')).toEqual(null);
  expect(accountBalancesModel.isSubscribed('REQ')).toEqual(false);
});
