// @flow
import { connect } from 'react-redux'
import tokenBalanceChartSelector from '../../store/models/tokenBalanceChart'

import type { Props as TokenBalanceChartProps } from './TokenBalanceChart'
import type { State } from '../../types'


export function mapStateToProps(state: State): TokenBalanceChartProps {
  const { tokenBalances, balancesLoading } = tokenBalanceChartSelector(state)

  return { tokenBalances, balancesLoading }
}

export default connect(
  mapStateToProps,
)
