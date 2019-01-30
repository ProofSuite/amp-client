//@flow

import { 
    getTokenPairsDomain,
    getAccountDomain,
    getTokenDomain,
    getStatsDomain
} from '../domains'


export default function statisticsBoardSelector(state: State) {
    let tokenPairsDomain = getTokenPairsDomain(state)
    let tokensDomain = getTokenDomain(state)
    let statsDomain = getStatsDomain(state)
    let { referenceCurrencyName } = getAccountDomain(state)

    let currency = referenceCurrencyName
    let exchangeRates = tokensDomain.exchangeRates(currency)
    let tradingStats = statsDomain.state

    let orderCountsByPair = tokenPairsDomain.orderCountsBySymbol()
    let tradeCountsByPair = tokenPairsDomain.tradeCountsBySymbol()
    let orderValuesByPair = tokenPairsDomain.orderBookVolumeBySymbol(exchangeRates, currency)
    let tradeValuesByPair = tokenPairsDomain.tradeVolumeBySymbol(exchangeRates, currency)

    return {
        ...tradingStats,
        orderCountsByPair,
        orderValuesByPair,
        tradeCountsByPair,
        tradeValuesByPair
    }
}