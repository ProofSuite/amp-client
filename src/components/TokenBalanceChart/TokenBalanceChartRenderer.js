// @flow
import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import { Colors, CenteredSpinner } from '../Common'
import styled from 'styled-components'

type Props = {
  activeIndex: number,
  renderActiveShape: () => void;
  renderLabels: () => void;
  data: Array<Object>,
  colors: Array<string>,
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
    balancesLoading,
    colors
  } = props

  if (balancesLoading) return (
    <LoadingChartBox>
      <CenteredSpinner />
    </LoadingChartBox>
  )

  if (isEmpty) return (
    <EmptyChartNotification>
      Your account is empty
    </EmptyChartNotification>
  )
  let p = Math.floor(colors.length/data.length)

  return (
    <ResponsiveContainer height={300} width="100%">
      <PieChart>
        <Pie
          data={data}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={"50%"}
          cy={"50%"}
          innerRadius={60}
          outerRadius={80}
          fill={Colors.PRIMARY}
          stroke={Colors.APP_BACKGROUND}
          onMouseEnter={onPieEnter}
        >
          {
          	data.map((entry, index) => <Cell fill={colors[p * index]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
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
  height: 150px;
  align-items: center;
  align-content: center;
`

export default TokenBalanceChartRenderer