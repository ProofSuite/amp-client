import React from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import { Colors } from '../Common';

var AmCharts = require('@amcharts/amcharts3-react');

type BidOrAsk = {
  price: number,
  amount: number,
  total: number,
};

type ChartProps = {
  title: string,
  bids: Array<BidOrAsk>,
  asks: Array<BidOrAsk>,
  tootTip: (Object, Object) => string,
};

const DepthChartRenderer = (props: ChartProps) => {
  const { asks, bids, toolTip, title } = props;
  return (
    <div>
      <AmCharts.React
        className="depth-chart"
        style={{
          width: '100%',
          height: '500px',
        }}
        options={{
          type: 'serial',
          theme: 'dark',
          dataProvider: bids.concat(asks),
          graphs: [
            {
              id: 'asks',
              fillAlphas: 0.1,
              lineAlpha: 1,
              lineThickness: 2,
              lineColor: '#3DCC91',
              type: 'step',
              valueField: 'total',
              balloonFunction: toolTip,
            },
            {
              id: 'bids',
              fillAlphas: 0.1,
              lineAlpha: 1,
              lineThickness: 2,
              lineColor: '#F55656',
              type: 'step',
              valueField: 'total',
              balloonFunction: toolTip,
            },
            {
              lineAlpha: 0,
              fillAlphas: 0.2,
              lineColor: '#000',
              type: 'column',
              clustered: false,
              valueField: 'amount',
              showBalloon: false,
            },
            {
              lineAlpha: 0,
              fillAlphas: 0.2,
              lineColor: '#000',
              type: 'column',
              clustered: false,
              valueField: 'amount',
              showBalloon: false,
            },
          ],
          categoryField: 'price',
          chartCursor: {},
          balloon: {
            textAlign: 'left',
          },
          categoryAxis: {
            title: title,
            minHorizontalGap: 100,
            startOnAxis: true,
            showFirstLabel: false,
            showLastLabel: false,
          },
          listeners: [
            {
              event: 'zoomed',
              method: function(e) {},
            },
            {
              event: 'clickGraphItem',
              method: function(e) {},
            },
          ],
        }}
      />
    </div>
  );
};
export default DepthChartRenderer;
