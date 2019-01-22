// @flow
import { connect } from 'react-redux'
import statisticsBoardSelector from '../../store/models/statisticsBoard'

import type { State } from '../../types'

type OwnProps = {
  toggleMarketStatistics: void => void
}


export function mapStateToProps(state: State, ownProps: OwnProps) {
  const selector = statisticsBoardSelector(state)

  return { 
    ...selector,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
)
