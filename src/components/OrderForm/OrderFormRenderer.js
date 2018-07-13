import React from 'react';
import Form from './Form';
import { Card, Tab, Tabs } from '@blueprintjs/core';
import { reduceDecimals } from '../../utils/converters';
import { OrderFormRendererOptions } from '../../types/orderForm';

type Props = {
  formName: string,
  askPrice: number,
  bidPrice: number,
  totalQuoteBalance: number,
  totalBaseBalance: number,
  loggedIn: boolean,
  baseToken: string,
  quoteToken: string,
  decimals: number,
};

type State = OrderFormRendererOptions;

class OrderFormRenderer extends React.PureComponent<Props, State> {
  state = {
    portion: 0,
    priceType: 'null',
    selectedTabId: 'limit',
    price: 0,
    stopPrice: 0,
    limitPrice: 0,
    amount: 0,
    total: 0,
  };

  componentDidMount() {
    const {
      props: { formName, askPrice, bidPrice },
    } = this;

    if (formName === 'Buy') {
      this.setState({
        price: askPrice,
      });
    } else {
      this.setState({
        price: bidPrice,
      });
    }
  }

  handlePortion = e => {
    const {
      state: { price },
      props: { formName, decimals, totalQuoteBalance, totalBaseBalance },
    } = this;
    let portion = parseInt(e.target.value);
    let amount;

    if (formName === 'Sell') {
      amount = (totalQuoteBalance / 100) * portion;
      let total = price * amount;
      this.setState({
        portion: portion,
        amount: reduceDecimals(amount, decimals),
        total: reduceDecimals(total, decimals),
      });
    } else {
      let total = (totalBaseBalance / 100) * portion;
      amount = total / price;
      this.setState({
        portion: portion,
        amount: reduceDecimals(amount, decimals),
        total: reduceDecimals(total, decimals),
      });
    }
  };

  handlePriceChange = e => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let total = amount * e.target.value;

    this.setState({
      total: reduceDecimals(total, decimals),
      price: e.target.value,
    });
  };

  handleLimitPriceChange = e => {
    let total = this.state.amount * e.target.value;

    this.setState({
      // total: Math.floor(total * Math.pow(10, 7)) / Math.pow(10, 7),
      limitPrice: e.target.value,
    });
  };

  handleStopPriceChange = e => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let total = amount * e.target.value;

    this.setState({
      total: reduceDecimals(total, decimals),
      stopPrice: e.target.value,
    });
  };

  handleAmountChange = e => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let total;

    if (selectedTabId === 'stop') {
      total = stopPrice * e.target.value;
    } else {
      total = price * e.target.value;
    }
    this.setState({
      total: reduceDecimals(total, decimals),
      amount: e.target.value,
    });
  };

  handleTotalChange = e => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let amount;

    if (selectedTabId === 'stop') {
      amount = e.target.value / stopPrice;
    } else {
      amount = e.target.value / price;
    }
    this.setState({
      amount: reduceDecimals(amount, decimals),
      total: e.target.value,
    });
  };

  handlePriceType = e => {
    if (e.target.value === 'Bid') {
      this.handlePriceChange({ target: { value: this.props.bidPrice } });
    } else {
      this.handlePriceChange({ target: { value: this.props.askPrice } });
    }
    this.setState({
      priceType: e.target.value,
    });
  };

  resetRadios = () => {
    this.setState({ portion: 0 });
  };

  changeTab = tabId => {
    const {
      props: { formName, askPrice, bidPrice },
    } = this;

    this.setState({
      selectedTabId: tabId,
      portion: 0,
      priceType: 'null',
      price: 0,
      stopPrice: 0,
      limitPrice: 0,
      amount: 0,
      total: 0,
    });
    if (tabId === 'limit' && formName === 'Buy') {
      this.setState({
        price: askPrice,
      });
    } else if (tabId === 'limit') {
      this.setState({
        price: bidPrice,
      });
    }
  };

  onInputChange = props => {
    const {
      props: { loggedIn },
    } = this;

    switch (props.target) {
      case 'stopPrice':
        this.handleStopPriceChange(props.evt);
        break;

      case 'limitPrice':
        this.handleLimitPriceChange(props.evt);
        break;

      case 'price':
        this.handlePriceChange(props.evt);
        break;

      case 'total':
        this.handleTotalChange(props.evt);
        break;

      case 'amount':
        this.handleAmountChange(props.evt);
        break;

      case 'portion':
        if (loggedIn) {
          this.handlePortion(props.evt);
        }
        break;

      case 'radio':
        this.resetRadios(props.evt);
        break;
    }
  };

  render() {
    const {
      props: { style, formName, baseToken, selectedTabId, loggedIn, quoteToken },
      onInputChange,
      changeTab,
    } = this;
    return (
      <Card style={style} className="pt-dark order-form">
        <h5>
          {formName} {quoteToken}
        </h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="limit"
            title="Limit"
            panel={
              <Form
                formName={formName}
                baseToken={baseToken}
                quoteToken={quoteToken}
                loggedIn={loggedIn}
                state={this.state}
                onInputChange={onInputChange}
              />
            }
          />
          <Tab
            id="stop"
            title="Stop Limit"
            panel={
              <Form
                formName={formName}
                baseToken={baseToken}
                quoteToken={quoteToken}
                loggedIn={loggedIn}
                state={this.state}
                onInputChange={onInputChange}
              />
            }
          />
        </Tabs>
        {/*<Button />*/}
      </Card>
    );
  }
}
export default OrderFormRenderer;
