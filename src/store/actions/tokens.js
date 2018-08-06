//@flow
const actionTypes = {
  updateTokens: 'tokens/UPDATE_TOKENS',
  removeTokens: 'tokens/REMOVE_TOKENS',
};

//deprecated
export function updateTokens(address: string, symbol: string) {
  return {
    type: actionTypes.updateTokens,
    payload: { address, symbol },
  };
}

//deprecated
export function removeTokens(symbol: string) {
  return {
    type: actionTypes.removeTokens,
    payload: { symbol },
  };
}

export default actionTypes;
