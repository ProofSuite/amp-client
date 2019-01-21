// @flow
import { connect } from 'react-redux'
import statisticsBoardSelector from '../../store/models/statisticsDashBoard'

import type { State } from '../../types'


export function mapStateToProps(state: State) {
//   const selector = statisticsBoardSelector(state)

//   return { ...selector }
}

export default connect(
  mapStateToProps,
)
