import model from './etherBalance';
import * as eventCreators from './etherBalance';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);

  return model(state);
}

it('handles initialized event properly', () => {
  const etherBalance = getModel([eventCreators.initialized()]);

  expect(etherBalance.get('test address')).toEqual(null);
  expect(etherBalance.isSubscribed('test address')).toEqual(false);
});

it('handles subscribed event properly', () => {
  const etherBalance = getModel([eventCreators.initialized(), eventCreators.subscribed('test address')]);

  expect(etherBalance.get('test address')).toEqual(null);
  expect(etherBalance.isSubscribed('test address')).toEqual(true);
});

it('handles updated event properly', () => {
  const etherBalance = getModel([
    eventCreators.initialized(),
    eventCreators.subscribed('test address'),
    eventCreators.updated('test address', 'test balance'),
  ]);

  expect(etherBalance.get('test address')).toEqual('test balance');
  expect(etherBalance.isSubscribed('test address')).toEqual(true);
});

it('handles unsubscribed event properly', () => {
  const etherBalance = getModel([
    eventCreators.initialized(),
    eventCreators.subscribed('test address'),
    eventCreators.updated('test address', 'test balance'),
    eventCreators.unsubscribed('test address'),
  ]);

  expect(etherBalance.get('test address')).toEqual(null);
  expect(etherBalance.isSubscribed('test address')).toEqual(false);
});
