import React from 'react'
import TokenBalanceChartRenderer from './TokenBalanceChartRenderer'
import { Sector } from 'recharts'
import { Colors } from '../Common'

const colors = ["#FFEEC5", "#FEE0BE", "#FBD3B7", "#F8C5B0", "#F5B8A9", "#F0ABA2", "#EB9E9C", "#E59196", "#DE8590", "#D7798A", "#CF6D84", "#C6627F", "#BC5779", "#B24C74", "#A6436F", "#9A3A6B", "#8D3367", "#7E2D63", "#6E285F", "#5C255C"]
// const activeShapeColors = ["#2965CC", "#29A634", "#D99E0B", "#D13913", "#8F398F", "#00B3A4", "#DB2C6F", "#9BBF30", "#96622D", "#7157D9"]

type State = {
  activeIndex: number
}

export type Props = {
  tokenBalances: Array<Object>,
  balancesLoading: boolean,
  currency: string,
}

export default class TokenBalanceChart extends React.PureComponent<Props,State> {

  state = { activeIndex: 0 }

  onPieEnter = (data: Object, index: number) => {
    this.setState({ activeIndex: index })
  }

  renderLabels = (props: *) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius } = props;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
          hello
        </text>
      </g>
    )

  }

  renderActiveShape = (props: *) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent, value } = props;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);

    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 2;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={Colors.PRIMARY}
          stroke={Colors.APP_BACKGROUND}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          stroke={Colors.APP_BACKGROUND}
          fill={Colors.BLUE5}
        />
        {/* <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	style={{"font-size": 20}} fill={Colors.WHITE} dominantBaseline="central">{payload.symbol}</text> */}
        <text x={cx} y={cy} dy={8} style={{"fontSize": 15}} textAnchor="middle" fill={Colors.WHITE}>{payload.balance} {payload.symbol}</text>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={Colors.BLUE5} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={Colors.PRIMARY} stroke={Colors.BLUE5}/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 4} y={ey} textAnchor={textAnchor} fill={Colors.WHITE}>{`${value} ${payload.currency}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 4} y={ey} dy={18} textAnchor={textAnchor} fill={Colors.WHITE}>
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

render() {
  const { activeIndex } = this.state
  const { tokenBalances, balancesLoading } = this.props

  const isEmpty = (tokenBalances.length === 0)

  return (
    <TokenBalanceChartRenderer
      balancesLoading={balancesLoading}
      activeIndex={activeIndex}
      data={tokenBalances}
      renderActiveShape={this.renderActiveShape}
      renderLabels={this.renderLabels}
      onPieEnter={this.onPieEnter}
      isEmpty={isEmpty}
      colors={colors}
    />
  )
}

}