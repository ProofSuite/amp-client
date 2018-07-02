export function initialized() {
  const initialState = {};
  const event = (state = initialState) => state;

  return event;
}

export function subscribed(address) {
  const event = state => ({
    ...state,
    [address]: null,
  });

  return event;
}

export function updated(address, balance) {
  const event = state => ({
    ...state,
    [address]: balance,
  });

  return event;
}

export function unsubscribed(address) {
  const event = state =>
    Object.keys(state).reduce((result, balanceAddress) => {
      if (balanceAddress !== address) {
        result[balanceAddress] = state[balanceAddress];
      }

      return result;
    }, {});

  return event;
}

export default function model(state) {
  return {
    get(address) {
      if (!this.isSubscribed(address)) {
        return null;
      }

      return state[address];
    },

    isSubscribed(address) {
      return typeof state[address] !== 'undefined';
    },
  };
}
