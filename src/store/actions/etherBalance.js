const actionTypes = {
  subscribeBalance: 'etherBalance/SUBSCRIBE_BALANCE',
  updateBalance: 'etherBalance/UPDATE_BALANCE',
  unsubscribeBalance: 'etherBalance/UNSUBSCRIBE_BALANCE',
};

export function subscribeBalance(address) {
  return {
    type: actionTypes.subscribeBalance,
    payload: { address },
  };
}

export function updateBalance(address, balance) {
  return {
    type: actionTypes.updateBalance,
    payload: { address, balance },
  };
}

export function unsubscribeBalance(address) {
  return {
    type: actionTypes.unsubscribeBalance,
    payload: { address },
  };
}

export default actionTypes;
