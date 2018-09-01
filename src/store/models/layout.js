import accountDomain from '../domains/account';

export default function createSelector(state) {
  return {
    authenticated: accountDomain(state.account).authenticated(),
    account: accountDomain(state.account).address(),
    provider: accountDomain(state.account).provider(),
    currentBlock: accountDomain(state.account).currentBlock(),
  };
}
