// @flow
import { connect } from 'react-redux'
import orderFormSelector, { sendNewOrder, unlockPair } from '../../store/models/orderForm'
import type { State } from '../../types'

type Props = {
  onCollapse: string => void
}

export const mapStateToProps = (state: State, ownProps: Props) => {
  return {
    ...orderFormSelector(state),
    ...ownProps
  }
}

export const mapDispatchToProps = {
  sendNewOrder,
  unlockPair,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
