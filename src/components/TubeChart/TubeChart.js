import React from 'react'
import TubeChartRenderer from './TubeChartRenderer'

type State = {}

type Props = {
    loading: boolean,
    unit: string,
    positiveAmount: number,
    negativeAmount: number
}

export default class TubeChart extends React.PureComponent<Props, State> {
    
    render() {
        const {
            loading,
            unit,
            positiveAmount,
            negativeAmount
        } = this.props

        const percentage = (positiveAmount / (positiveAmount + negativeAmount)) * 100

        return (
            <TubeChartRenderer
                loading={loading}
                unit={unit}
                percentage={percentage}
            />
        )
    }
}