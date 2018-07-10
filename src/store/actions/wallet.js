const actionTypes = {
  connect: 'wallet/CONNECT',
  cleanUp: 'wallet/CLEAN_UP',
};

export function connect(provider, address) {
  return {
    type: actionTypes.connect,
    payload: { provider, address },
  };
}

export function cleanUp() {
  return {
    type: actionTypes.cleanUp,
    payload: {},
  };
}

export default actionTypes;
