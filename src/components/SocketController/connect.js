import { connect } from 'react-redux'
import socketControllerSelector, { openConnection } from '../../store/models/socketController'

export function mapStateToProps(state) {
  const { authenticated } = socketControllerSelector(state)

  return { authenticated }
}

const mapDispatchToProps = { openConnection }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
