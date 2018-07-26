import accountDomain, * as eventCreators from './account';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return accountDomain(state);
}

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.address()).toEqual(null);
});

it('handles updated event properly', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.accountUpdated('0x44809695706c252435531029b1e9d7d0355d475f'),
  ]);

  expect(domain.address()).toEqual('0x44809695706c252435531029b1e9d7d0355d475f');
});

it('handles removed event', () => {
  const domain = getDomain([
    eventCreators.initialized(),
    eventCreators.accountUpdated('0x44809695706c252435531029b1e9d7d0355d475f'),
    eventCreators.accountRemoved(),
  ]);

  expect(domain.address()).toEqual(null);
});
