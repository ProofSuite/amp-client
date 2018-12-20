const actionTypes = {
  unlockPair: 'orderForm/UNLOCK_PAIR',
};

export function unlockPair(baseTokenSymbol: string, quoteTokenSymbol: string) {
  return {
    type: actionTypes.unlockPair,
    payload: { baseTokenSymbol, quoteTokenSymbol },
  };
}

export default actionTypes;
