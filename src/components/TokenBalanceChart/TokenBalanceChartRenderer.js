// @flow
import React from 'react'
import { PieChart, Pie } from 'recharts'
import { Colors } from '../Common'

type Props = {
  activeIndex: number,
  renderActiveShape: () => void;
  renderLabels: () => void;
  data: Array<Object>,
  onPieEnter: (Object, number) => void
}

const TokenBalanceChartRenderer = (props: Props) => {
  const {
    activeIndex,
    renderActiveShape,
    data,
    onPieEnter
  } = props

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

export default TokenBalanceChartRenderer