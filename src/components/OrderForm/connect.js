// @flow
import { connect } from 'react-redux'
import orderFormSelector, { sendNewOrder } from '../../store/models/orderForm'
import type { State } from '../../types'

export const mapStateToProps = (state: State) => {
  return orderFormSelector(state)
}

export const mapDispatchToProps = {
  sendNewOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
