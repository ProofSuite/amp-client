// @flow
import React from 'react'
import { PieChart, Pie } from 'recharts'
import { Colors, CenteredSpinner } from '../Common'
import { H4 } from '@blueprintjs/core'
import styled from 'styled-components'

type Props = {
  activeIndex: number,
  renderActiveShape: () => void;
  renderLabels: () => void;
  data: Array<Object>,
  onPieEnter: (Object, number) => void,
  balancesLoading: boolean,
  isEmpty: boolean,
}

const TokenBalanceChartRenderer = (props: Props) => {
  const {
    activeIndex,
    renderActiveShape,
    data,
    onPieEnter,
    isEmpty,
    balancesLoading
  } = props

  if (balancesLoading) return (
    <LoadingChartBox>
      <CenteredSpinner />
    </LoadingChartBox>
  )

  if (isEmpty) return (
    <EmptyChartNotification>
      <H4>Your account is empty</H4>
    </EmptyChartNotification>
  )

  return (
    <PieChart width={600} height={400}>
    <Pie
      activeIndex={activeIndex}
      activeShape={renderActiveShape}
      data={data}
      cx={"44%"}
      cy={"40%"}
      innerRadius={100}
      outerRadius={130}
      fill={Colors.PRIMARY}
      stroke={Colors.APP_BACKGROUND}
      onMouseEnter={onPieEnter}
    />
   </PieChart>
  )
}

const LoadingChartBox = styled.div`
  height: 400px;
  width: 100%;
`

const EmptyChartNotification = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 400px;
  align-items: center;
  align-content: center;
`

export default TokenBalanceChartRenderer