import React from 'react';
import OrderForm from '../OrderForm';
import CoinSearcher from '../CoinSearcher';

class Collapse extends React.Component {
  render() {
    console.log('this.props.showLeft: ', this.props.showLeft);
    return (
      <div className="wrap-collabsible">
        <div className={this.props.showLeft ? 'collapsible-content open' : 'collapsible-content'}>
          <div className="content-inner">
            <CoinSearcher small={true} />
            <OrderForm />
            <OrderForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
