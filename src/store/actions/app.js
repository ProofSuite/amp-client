const actionTypes = {
  addNotification: 'app/ADD_NOTIFICATION',
  addErrorNotification: 'app/ADD_DANGER_NOTIFICATION',
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

export function addOrderAddedNotification() {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'orderAdded',
    }
  }
}

export function addOrderCancelledNotification() {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'orderCancelled'
    }
  }
}

export function addOrderMatchedNotification() {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'orderMatched'
    }
  }
}

export function addOrderPendingNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'orderPending',
      options,
    }
  }
}

export function addOrderSuccessNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'orderSuccess',
      options,
    }
  }
}

export function addTxSuccessNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'txSuccess',
      options
    }
  }
}

export function addTxRevertedNotification(options) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'txReverted',
      options,
    }
  }
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

export function addUnlockTokenConfirmedNotification({ symbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'unlockTokenConfirmed',
      options: {
        symbol,
        txHash
      }
    }
  }
}

export function addLockTokenConfirmedNotification({ symbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'lockTokenConfirmed',
      options: {
        symbol,
        txHash
      }
    }
  }
}

export function addUnlockTokenPendingNotification({ symbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'unlockTokenPending',
      options: {
        symbol,
        txHash
      }
    }
  }
}

export function addLockTokenPendingNotification({ symbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'lockTokenPending',
      options: {
        symbol,
        txHash
      }
    }
  }
}

export function addUnlockPairConfirmedNotification({ baseTokenSymbol, quoteTokenSymbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'unlockPairConfirmed',
      options: {
        baseTokenSymbol, 
        quoteTokenSymbol,
        txHash
      }
    }
  }
}

export function addLockPairConfirmedNotification({ baseTokenSymbol, quoteTokenSymbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'lockPairConfirmed',
      options: {
        baseTokenSymbol, 
        quoteTokenSymbol,
        txHash
      }
    }
  }
}

export function addUnlockPairPendingNotification({ baseTokenSymbol, quoteTokenSymbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'unlockPairPending',
      options: {
        baseTokenSymbol, 
        quoteTokenSymbol,
        txHash
      }
    }
  }
}

export function addLockPairPendingNotification({ baseTokenSymbol, quoteTokenSymbol, txHash }) {
  return {
    type: actionTypes.addNotification,
    payload: {
      notificationType: 'lockPairPending',
      options: {
        baseTokenSymbol, 
        quoteTokenSymbol,
        txHash
      }
    }
  }
}



export function addErrorNotification({ message }) {
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
