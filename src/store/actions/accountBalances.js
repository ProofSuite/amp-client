const actionTypes = {
  subscribeBalance: 'accountBalances/SUBSCRIBE_BALANCE',
  updateBalance: 'accountBalances/UPDATE_BALANCE',
  unsubscribeBalance: 'accountBalances/UNSUBSCRIBE_BALANCE',
  clearBalances: 'accountBalances/CLEAR_BALANCES',
};

export function subscribeBalance(symbol) {
  return {
    type: actionTypes.subscribeBalance,
    payload: { symbol },
  };
}

export function updateBalance(symbol, balance) {
  return {
    type: actionTypes.updateBalance,
    payload: { symbol, balance },
  };
}

export function unsubscribeBalance(symbol) {
  return {
    type: actionTypes.unsubscribeBalance,
    payload: { symbol },
  };
}

export function clearBalances() {
  return {
    type: actionTypes.clearBalances,
  };
}

export default actionTypes;
