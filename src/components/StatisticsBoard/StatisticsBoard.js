//@flow
import React from 'react'
import StatisticsBoardRenderer from './StatisticsBoardRenderer'

type Props = {
    tradeCountsByToken: Array<Object>,
    orderCountsByToken: Array<Object>,
    tradeCountsByPair: Array<Object>,
    orderCountsByPair: Array<Object>,
    tradeValuesByToken: Array<Object>,
    orderValuesByToken: Array<Object>,
    tradeValuesByPair: Array<Object>,
    orderValuesByPair: Array<Object>,
    mostTradedToken: string,
    mostTradedPair: string,
    tradeSuccessRatio: number,
    totalBuyAmount: number,
    totalSellAmount: number,
    numberOfTrades: number,
    numberOfOrders: number,
    numberOfBuys: number,
    numberOfSells: number,
    toggleMarketStatistics: void => void
}

type State = {}


export default class StatisticsBoard extends React.PureComponent<Props, State> {

    render() {
        return (
            <StatisticsBoardRenderer {...this.props}/>
        )
    }
}