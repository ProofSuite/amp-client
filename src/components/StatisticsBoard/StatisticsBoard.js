import React from 'react'
import { StatisticsBoardRenderer } from './StatisticsBoardRenderer'

type Props = {}

type State = {}


export default class StatisticsBoard extends React.PureComponent<Props, State> {

    render() {
        return (
            <StatisticsBoardRenderer />
        )
    }
}