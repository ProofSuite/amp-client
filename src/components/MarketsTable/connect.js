import { connect } from 'react-redux'
import getMarketTableSelector from '../../store/models/marketsTable'

import type { State } from '../../types'

export function mapStateToProps(state: State) {
    let marketTableSelector = getMarketTableSelector(state)

    return {
        ...marketTableSelector
    }
}

export default connect(mapStateToProps)