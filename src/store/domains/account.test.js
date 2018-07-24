import model from './account';
import * as eventCreators from './account';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const accountModel = getModel([eventCreators.initialized()]);

  expect(accountModel.address()).toEqual(null);
});

it('handles updated event properly', () => {
  const accountModel = getModel([
    eventCreators.initialized(),
    eventCreators.accountUpdated('0x44809695706c252435531029b1e9d7d0355d475f'),
  ]);

  expect(accountModel.address()).toEqual('0x44809695706c252435531029b1e9d7d0355d475f');
});

it('handles removed event', () => {
  const accountModel = getModel([
    eventCreators.initialized(),
    eventCreators.accountUpdated('0x44809695706c252435531029b1e9d7d0355d475f'),
    eventCreators.accountRemoved(),
  ]);

  expect(accountModel.address()).toEqual(null);
});
