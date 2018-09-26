import { connect } from 'react-redux'
import settingsPageSelector from '../../store/models/settings'
import { togglePvtKeyLock } from '../../store/actions/settings'

export function mapStateToProps(state, props) {
  const { pvtKeyLocked } = settingsPageSelector(state)

  return { pvtKeyLocked }
}

const mapDispatchToProps = { togglePvtKeyLock }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
