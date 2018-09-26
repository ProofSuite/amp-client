import { connect } from 'react-redux'
import socketManagerSelector, { openConnection } from '../../store/models/socketManager'

export function mapStateToProps(state) {
  const { authenticated } = socketManagerSelector(state)

  return { authenticated }
}

const mapDispatchToProps = { openConnection }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
