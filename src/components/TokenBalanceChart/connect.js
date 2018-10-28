import { connect } from 'react-redux'
import tokenBalanceChartSelector from '../../store/models/tokenBalanceChart'

export function mapStateToProps(state) {
  const { tokenBalances } = tokenBalanceChartSelector(state)

  return { tokenBalances }
}

export default connect(
  mapStateToProps,
)
