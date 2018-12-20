// @flow
import { connect } from 'react-redux'
import tokenBalanceChartSelector from '../../store/models/tokenBalanceChart'

import type { Props as TokenBalanceChartProps } from './TokenBalanceChart'
import type { State } from '../../types'


export function mapStateToProps(state: State): TokenBalanceChartProps {
  const selector = tokenBalanceChartSelector(state)

  return { ...selector }
}

export default connect(
  mapStateToProps,
)
