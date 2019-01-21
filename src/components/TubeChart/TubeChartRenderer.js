// @flow 
import React from 'react'
import styled from 'styled-components'

import { FlexRow, Colors } from '../Common'

type Props = {
    loading: boolean,
    unit: string,
    percentage: number
}

const TubeChartRenderer = (props: Props) => {
    const { 
        loading,
        unit,
        percentage,
    } = props
    
    return (
        <FlexRow width={400}>
            <GreenBar percentage={percentage} />
            <RedBar percentage={percentage} />
        </FlexRow>
    )
}

const GreenBar = styled.div`
    height: 30px;
    width: ${props => props.percentage + "%"};
    background-color: ${Colors.SUCCESS};
    border-radius: 6px 0px 0px 6px;
    opacity: 0.6;
`

const RedBar = styled.div`
    height: 30px;
    width: ${props => 100 - props.percentage + "%"};
    background-color: ${Colors.DANGER};
    border-radius: 0px 6px 6px 0px;
    opacity: 0.6;
`

export default TubeChartRenderer