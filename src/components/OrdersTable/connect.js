// @flow
import { connect } from 'react-redux'
import ordersTableSelector, { cancelOrder } from '../../store/models/ordersTable'
import type { State } from '../../types'

export const mapStateToProps = (state: State) => {
  return {
    orders: ordersTableSelector(state).orders(),
  }
}

export const mapDispatchToProps = { cancelOrder }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
