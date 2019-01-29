// @flow
import { connect } from 'react-redux'
import ordersTableSelector, { cancelOrder } from '../../store/models/ordersTable'
import type { State } from '../../types'

type Props = {
  onCollapse: string => void
}

export const mapStateToProps = (state: State, ownProps: Props) => {
  return {
    orders: ordersTableSelector(state).orders(),
    ...ownProps
  }
}

export const mapDispatchToProps = { cancelOrder }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
