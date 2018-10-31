import React from 'react'
import TokenBalanceChartRenderer from './TokenBalanceChartRenderer'
import { Sector } from 'recharts'
import { Colors } from '../Common'

type State = {
  activeIndex: number
}

type Props = {
  tokenBalances: Array<Object>
}

export default class TokenBalanceChart extends React.PureComponent<Props,State> {

  state = { activeIndex: 1 }

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
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
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
        <text x={cx} y={cy} dy={8} style={{"font-size": 30}} textAnchor="middle" fill={Colors.WHITE}>{payload.symbol}</text>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={Colors.BLUE5} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={Colors.PRIMARY} stroke={Colors.BLUE5}/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={Colors.WHITE}>{`Balance ${value} ${payload.symbol}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={Colors.WHITE}>
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

render() {
  const { activeIndex } = this.state
  const { tokenBalances } = this.props

  return (
    <TokenBalanceChartRenderer
      activeIndex={activeIndex}
      data={tokenBalances}
      renderActiveShape={this.renderActiveShape}
      renderLabels={this.renderLabels}
      onPieEnter={this.onPieEnter}
    />
  )
}

}