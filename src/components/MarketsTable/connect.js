import { connect } from 'react-redux'
import getMarketTableSelector, {  redirectToTradingPage, toggleAllowance } from '../../store/models/marketsTable'

import type { State } from '../../types'

export function mapStateToProps(state: State) {
    let marketTableSelector = getMarketTableSelector(state)

    return {
        ...marketTableSelector
    }
}

export const mapDispatchToProps = {
    redirectToTradingPage,
    toggleAllowance,
}

export default connect(mapStateToProps, mapDispatchToProps)