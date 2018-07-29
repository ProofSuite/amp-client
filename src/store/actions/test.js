const actionTypes = {
  addNotification: 'test/ADD_NOTIFICATION',
  removeNotification: 'test/REMOVE_NOTIFICATION',
};

export function addNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: { options },
  };
}

export function removeNotification(id) {
  return {
    type: actionTypes.removeNotification,
    payload: { id },
  };
}

export default actionTypes;
