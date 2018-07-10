const initialState = {
  account: null,
  wallets: [],
};

export function initialized() {
  const event = (state = initialState) => state;

  return event;
}

export function accountSet(account) {
  const event = state => ({
    ...state,
    account,
  });

  return event;
}

export function cleanedUp() {
  const event = () => initialState;

  return event;
}

export default function model(state) {
  return {
    isDefaultAccountSet() {
      return state.account !== null;
    },

    getDefaultAccount() {
      return state.account;
    },
  };
}
