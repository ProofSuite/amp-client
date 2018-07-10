import walletModel from '../domains/wallet';
import * as actionCreators from '../actions/wallet';

export default function createSelector(state) {
  return walletModel(state.wallet);
}

export function connectMetamask() {
  return (dispatch, getState, { web3 }) => {
    const account = web3.eth.defaultAccount;

    dispatch(
      actionCreators.connect(
        'metamask',
        account
      )
    );
  };
}

export function importWallet() {
  return (dispatch, getState, { web3 }) => {};
}
