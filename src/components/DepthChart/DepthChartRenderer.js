import React from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

type ChartProps = {
  title: string,
  data: Array<Object>,
  tootlTip: (Object, Object) => string,
};

const DepthChartRenderer = (props: ChartProps) => {
  const { data, tootlTip, title } = props;
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
          dataProvider: data,
          graphs: [
            {
              id: 'bids',
              fillAlphas: 0.1,
              lineAlpha: 1,
              lineThickness: 2,
              lineColor: '#0f0',
              type: 'step',
              valueField: 'bidstotalvolume',
              balloonFunction: tootlTip,
            },
            {
              id: 'asks',
              fillAlphas: 0.1,
              lineAlpha: 1,
              lineThickness: 2,
              lineColor: '#f00',
              type: 'step',
              valueField: 'askstotalvolume',
              balloonFunction: tootlTip,
            },
            {
              lineAlpha: 0,
              fillAlphas: 0.2,
              lineColor: '#000',
              type: 'column',
              clustered: false,
              valueField: 'bidsvolume',
              showBalloon: false,
            },
            {
              lineAlpha: 0,
              fillAlphas: 0.2,
              lineColor: '#000',
              type: 'column',
              clustered: false,
              valueField: 'asksvolume',
              showBalloon: false,
            },
          ],
          categoryField: 'value',
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
              method: function(e) {
                if (document.querySelector('g image')) {
                  document
                    .querySelector('g image')
                    .setAttribute('xlink:href', 'https://www.amcharts.com/lib/3/images/lens.svg');
                }
              },
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
