// @flow
import * as notifierActionCreators from '../actions/app'
import { getOrdersDomain, getAccountDomain } from '../domains';
import type { State, ThunkAction } from '../../types'

import { parseCancelOrderError } from '../../config/errors'
import { getSigner } from '../services/signer'

export default function ordersTableSelector(state: State) {
  let { authenticated } = getAccountDomain(state)
  let ordersDomain = getOrdersDomain(state)

  return {
    orders: ordersDomain.lastOrders(50),
    authenticated
  };
}

export const cancelOrder = (hash: string): ThunkAction => {
  return async (dispatch, getState, { socket, mixpanel }) => {
    mixpanel.track('trading-page/cancel-order');

    try {
      let signer = getSigner()
      let orderCancelPayload = await signer.createOrderCancel(hash)

      dispatch(notifierActionCreators.addSuccessNotification({ message: `Cancelling order ...` }))
      socket.sendNewOrderCancelMessage(orderCancelPayload)
    } catch (error) {

      let message = parseCancelOrderError(error)
      return dispatch(notifierActionCreators.addErrorNotification({ message }))
    }
  }
}
