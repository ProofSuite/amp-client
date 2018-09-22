const actionTypes = {
  addNotification: 'app/ADD_NOTIFICATION',
  addDangerNotification: 'app/ADD_DANGER_NOTIFICATION',
  addSuccessNotification: 'app/ADD_SUCCESS_NOTIFICATION',
  removeNotification: 'app/REMOVE_NOTIFICATION',
  updateCurrentBlock: 'app/UPDATE_CURRENT_BLOCK',
};

export function addNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: { options },
  };
}

export function addSuccessNotification({ message }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      options: {
        intent: 'success',
        message: message,
      },
    },
  };
}

export function addDangerNotification({ message }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      options: {
        intent: 'danger',
        message: message,
      },
    },
  };
}

export function removeNotification(id) {
  return {
    type: actionTypes.removeNotification,
    payload: { id },
  };
}

export function updateCurrentBlock(currentBlock: string) {
  return {
    type: actionTypes.updateCurrentBlock,
    payload: { currentBlock },
  };
}

export default actionTypes;
