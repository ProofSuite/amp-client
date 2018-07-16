//@flow
import React from 'react';
import SmallChart from './SmallChart';
import ExtendedChart from './ExtendedChart';
import { getData } from '../../utils/services';

type State = {
  expandedChard: boolean,
  data: Array<Object>,
};

export default class OHLCVRenderer extends React.PureComponent<State> {
  state = {
    expandedChard: false,
    data: [],
  };

  toggleExpand = () => {
    this.setState(prevState => {
      return {
        expandedChard: !prevState.expandedChard,
      };
    });
  };

  componentDidMount() {
    const self = this;
    getData().then(data => {
      self.setState({ data: data });
    });
  }

  render() {
    const {
      state: { data, expandedChard },
      toggleExpand,
    } = this;
    return (
      <React.Fragment>
        <SmallChart ohlcvData={data} toggleExpand={toggleExpand} expandedChard={expandedChard} />
        <ExtendedChart ohlcvData={data} expandedChard={expandedChard} toggleExpand={toggleExpand} />
      </React.Fragment>
    );
  }
}
