import domain, * as eventCreators from './loginPage';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return domain(state);
}

it('handles initialized event', () => {
  const loginPageDomain = getDomain([eventCreators.initialized()]);
  expect(loginPageDomain.isLoading()).toEqual(false);
  expect(loginPageDomain.getError()).toEqual('');
});

it('handles loginRequested event', () => {
  const loginPageDomain = getDomain([eventCreators.initialized(), eventCreators.loginRequested()]);

  expect(loginPageDomain.isLoading()).toEqual(true);
  expect(loginPageDomain.getError()).toEqual('');
});

it('handles loginFailed event', () => {
  const loginPageDomain = getDomain([eventCreators.initialized(), eventCreators.loginFailed('Metamask not found')]);

  expect(loginPageDomain.isLoading()).toEqual(false);
  expect(loginPageDomain.getError()).toEqual('Metamask not found');
});

it('handles authenticated event properly', () => {
  const loginPageDomain = getDomain([eventCreators.initialized(), eventCreators.authenticated()]);

  expect(loginPageDomain.isLoading()).toEqual(false);
  expect(loginPageDomain.getError()).toEqual('');
});
