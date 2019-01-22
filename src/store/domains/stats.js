// @flow
import type { StatsState } from '../../types/stats'

const initialState = {
    totalOrders: null,
    totalTrades: null,
    totalSellOrders: null,
    totalBuyOrders: null,
    totalVolume: null,
    totalOrderAmount: null,
    mostTradedToken: "",
    mostTradedPair: "",
    tradeSuccessRatio: null
}

export const initialized = () => {
    const event = (state: StatsState = initialState) => state
    return event
}

export const updated = (newState: StatsState) => {
    const event = (state: StatsState = initialState) => ({
        ...state,
        ...newState
    })

    return event
}


export default function statsDomain(state: StatsState) {
    return {
        getState: () => state,
        totalOrders: () => state.totalOrders,
        totalTrades: () => state.totalTrades,
        totalSellOrders: () => state.totalSellOrders,
        totalBuyOrders: () => state.totalBuyOrders,
        totalVolume: () => state.totalVolume,
        totalOrderAmount: () => state.totalOrderAmount,
        mostTradedToken: () => state.mostTradedToken,
        mostTradedPair: () => state.mostTradedPair,
    }
}

