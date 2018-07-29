import React from 'react';
import OrderBookandChart from '../OrderBookandChart';

class CollapseRight extends React.Component {
  render() {
    return (
      <div className="wrap-collabsible">
        <div className={this.props.showRight ? 'collapsible-content open' : 'collapsible-content'}>
          <div className="content-inner">
            <OrderBookandChart />
          </div>
        </div>
      </div>
    );
  }
}

export default CollapseRight;
