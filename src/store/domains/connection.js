const initialState = {
  connectedCount: 0,
  isConnecting: false,
};

export const initialized = () => {
  const event = (state = initialState) => state;

  return event;
}

export const initiated = () => {
  const event = (state) => ({
    ...state,
    isConnecting: true,
  });

  return event;
}

export const opened = () => {
  const event = (state) => ({
    ...state,
    connectedCount: state.connectedCount + 1,
    isConnecting: false,
  });

  return event;
}

export const closed = () => {
  const event = (state) => ({
    ...state,
    isConnecting: true,
  });

  return event;
}

export default function accountDomain(state: AccountState) {
  return {
    isConnected: !state.isConnecting && state.connectedCount > 0,
    isConnecting: state.isConnecting,
    isInitiated: state.connectedCount > 0,
  };
}
