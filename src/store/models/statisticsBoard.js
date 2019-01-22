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
    let accountDomain = getAccountDomain(state)
    let statsDomain = getStatsDomain(state)

    let currency = accountDomain.referenceCurrencyName()
    let exchangeRates = tokensDomain.exchangeRates(currency)
    let tradingStats = statsDomain.getState()

    console.log(currency)

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