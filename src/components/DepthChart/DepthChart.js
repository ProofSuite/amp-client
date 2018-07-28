//@flow
import React from 'react';
import { Card } from '@blueprintjs/core';
import Loading from '../Loading';
import DepthChartRenderer from './DepthChartRenderer';
var AmCharts = require('@amcharts/amcharts3-react');

type Props = {
  data: Array<Object>,
  loading: boolean,
  title: string,
};

class DepthChart extends React.Component<Props> {
  formatNumber = (val: string, chart: Object, precision: number) => {
    return AmCharts.formatNumber(val, {
      precision: precision ? precision : chart.precision,
      decimalSeparator: chart.decimalSeparator,
      thousandsSeparator: chart.thousandsSeparator,
    });
  };

  toolTip = (item: Object, graph: Object) => {
    let txt;
    if (graph.id == 'asks') {
      txt = `Ask: <strong>${this.formatNumber(item.dataContext.value, graph.chart, 4)}</strong><br />
      Total volume: <strong>${this.formatNumber(item.dataContext.askstotalvolume, graph.chart, 4)}</strong><br />
      Volume: <strong>${this.formatNumber(item.dataContext.asksvolume, graph.chart, 4)}</strong>`;
    } else {
      txt = `Bid: <strong>${this.formatNumber(item.dataContext.value, graph.chart, 4)}</strong><br />
      Total volume: <strong>${this.formatNumber(item.dataContext.bidstotalvolume, graph.chart, 4)}</strong><br />
      Volume: <strong>${this.formatNumber(item.dataContext.bidsvolume, graph.chart, 4)}</strong>`;
    }
    return txt;
  };

  render() {
    const {
      props: { loading, data, title },
      toolTip,
    } = this;
    return (
      <div className={loading ? 'depth-chart-container loading' : 'depth-chart-container'}>
        {loading && <Loading />}
        {!loading && <DepthChartRenderer data={data} title={title} tootlTip={toolTip} />}
      </div>
    );
  }
}
export default DepthChart;
