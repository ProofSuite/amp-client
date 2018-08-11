const actionTypes = {
  addNotification: 'app/ADD_NOTIFICATION',
  removeNotification: 'app/REMOVE_NOTIFICATION',
};

export function addNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: { options },
  };
}

export function removeNotification(id) {
  console.log('action, removeNotification: ', id);
  return {
    type: actionTypes.removeNotification,
    payload: { id },
  };
}

export default actionTypes;
