export default function createSelector(state) {
  return;
}

export function connectMetamask() {
  return (dispatch, getState, { web3 }) => {
    const account = web3.eth.defaultAccount;
  };
}

export function importWallet() {
  return (dispatch, getState, { web3 }) => {};
}
