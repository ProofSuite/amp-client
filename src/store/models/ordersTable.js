// @flow
import * as appActionCreators from '../actions/app'
import { getOrdersDomain } from '../domains';
import type { State, ThunkAction } from '../../types'

import errors from '../../config/errors'

import { getSigner } from '../services/signer'

export default function ordersTableSelector(state: State) {
  return {
    orders: () => getOrdersDomain(state).lastOrders(100),
  };
}

export const cancelOrder = (hash: string): ThunkAction => {
  return async (dispatch, getState, { socket }) => {
    try {
      let signer = getSigner()
      let orderCancelPayload = await signer.createOrderCancel(hash)

      dispatch(appActionCreators.addSuccessNotification({ message: `Cancelling order ...` }))
      socket.sendNewOrderCancelMessage(orderCancelPayload)
    } catch (e) {
      console.log(e)
      if (e.message === errors.invalidJSON) {
        return dispatch(appActionCreators.addDangerNotification({ message: 'Connection error' }))
      }

      return dispatch(appActionCreators.addDangerNotification({ message: 'Unknown error' }))
    }
  }
}
