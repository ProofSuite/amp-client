// @flow
import React from 'react';
import OrderFormRenderer from './OrderFormRenderer';
import { Card, Tab, Tabs } from '@blueprintjs/core';
import { round } from '../../utils/converters';

type Props = {
  formName: string,
  askPrice: number,
  bidPrice: number,
  totalQuoteBalance: number,
  totalBaseBalance: number,
  baseToken: string,
  quoteToken: string,
  loggedIn?: boolean,
  decimals?: number,
  handleLimit: any => void,
  handleStopLimit: any => void,
};

type State = {
  portion: number,
  priceType: string,
  selectedTabId: string,
  price: string,
  stopPrice: string,
  limitPrice: string,
  amount: string,
  total: string,
};

class OrderForm extends React.PureComponent<Props, State> {
  static defaultProps = {
    decimals: 7,
    loggedIn: true,
  };
  state = {
    portion: 0,
    priceType: 'null',
    selectedTabId: 'limit',
    price: '',
    stopPrice: '',
    limitPrice: '',
    amount: '',
    total: '',
  };

  componentDidMount() {
    const {
      props: { formName, askPrice, bidPrice },
    } = this;

    if (formName === 'Buy') {
      // silence-error: couldn't resolve selectedToken === undefined case
      this.setState({ price: askPrice });
    } else {
      // silence-error: couldn't resolve selectedToken === undefined case
      this.setState({ price: bidPrice });
    }
  }

  handlePortion = (value: string) => {
    const {
      state: { price },
      props: { formName, decimals, totalQuoteBalance, totalBaseBalance },
    } = this;
    let portion = parseInt(value);
    let amount;

    if (formName === 'Sell') {
      amount = (totalQuoteBalance / 100) * portion;
      let total = parseFloat(price) * parseFloat(amount);
      this.setState({
        portion: portion,
        amount: round(amount, decimals, 'string'),
        total: round(total, decimals, 'string'),
      });
    } else {
      let total = (totalBaseBalance / 100) * portion;
      amount = parseFloat(total) / parseFloat(price);
      this.setState({
        portion: portion,
        amount: round(amount, decimals, 'string'),
        total: round(total, decimals, 'string'),
      });
    }
  };

  handlePriceChange = (value: string) => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let targetValue = parseFloat(value),
      total = parseFloat(amount) * parseFloat(targetValue);

    this.setState({
      total: round(total, decimals, 'string'),
      price: targetValue.toString(),
    });
  };

  handleLimitPriceChange = (value: string) => {
    let targetValue = parseFloat(value),
      total = parseFloat(this.state.amount) * parseFloat(targetValue);

    this.setState({
      // total: Math.floor(total * Math.pow(10, 7)) / Math.pow(10, 7),
      limitPrice: targetValue.toString(),
    });
  };

  handleStopPriceChange = (value: string) => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let targetValue = parseFloat(value),
      total = parseFloat(amount) * parseFloat(targetValue);

    this.setState({
      total: round(total, decimals, 'string'),
      stopPrice: targetValue.toString(),
    });
  };

  handleAmountChange = (value: string) => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let total,
      targetValue = parseFloat(value);

    if (selectedTabId === 'stop') {
      total = parseFloat(stopPrice) * parseFloat(targetValue);
    } else {
      total = parseFloat(price) * targetValue;
    }
    this.setState({
      total: round(total, decimals, 'string'),
      amount: targetValue.toString(),
    });
  };

  handleTotalChange = (value: string) => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let amount: number,
      targetValue = parseFloat(value);

    if (selectedTabId === 'stop') {
      amount = parseFloat(targetValue) / parseFloat(stopPrice);
    } else {
      amount = parseFloat(targetValue) / parseFloat(price);
    }
    this.setState({
      amount: round(amount, decimals, 'string'),
      total: targetValue.toString(),
    });
  };

  resetRadios = () => {
    this.setState({ portion: 0 });
  };

  changeTab = (tabId: string) => {
    const {
      props: { formName, askPrice, bidPrice },
    } = this;

    this.setState({
      selectedTabId: tabId,
      portion: 0,
      priceType: 'null',
      price: '',
      stopPrice: '',
      limitPrice: '',
      amount: '',
      total: '',
    });
    if (tabId === 'limit' && formName === 'Buy') {
      // silence-error: couldn't resolve selectedToken === undefined case
      this.setState({ price: askPrice });
    } else if (tabId === 'limit') {
      // silence-error: couldn't resolve selectedToken === undefined case
      this.setState({ price: bidPrice });
    }
  };

  onInputChange = (props: Object) => {
    const {
      props: { loggedIn },
    } = this;
    const { target } = props;
    switch (target.name) {
      case 'stopPrice':
        this.handleStopPriceChange(target.value);
        break;

      case 'limitPrice':
        this.handleLimitPriceChange(target.value);
        break;

      case 'price':
        this.handlePriceChange(target.value);
        break;

      case 'total':
        this.handleTotalChange(target.value);
        break;

      case 'amount':
        this.handleAmountChange(target.value);
        break;

      case 'portion':
        if (loggedIn) {
          this.handlePortion(target.value);
        }
        break;

      default:
        break;
    }
  };

  handleTxClick = () => {
    const { selectedTabId } = this.state;
    if (selectedTabId === 'limit') {
    } else if (selectedTabId === 'stop') {
    }
  };

  render() {
    const {
      state: { selectedTabId },
      props: { formName, baseToken, loggedIn, quoteToken },
      onInputChange,
      changeTab,
      handleTxClick,
    } = this;
    return (
      <Card className="pt-dark order-form">
        <h5>
          {formName} {quoteToken}
        </h5>
        <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={changeTab}>
          <Tab
            id="limit"
            title="Limit"
            panel={
              <OrderFormRenderer
                formName={formName}
                baseToken={baseToken}
                quoteToken={quoteToken}
                loggedIn={true}
                state={this.state}
                onInputChange={onInputChange}
                handleTxClick={handleTxClick}
              />
            }
          />
          <Tab
            id="stop"
            title="Stop Limit"
            panel={
              <OrderFormRenderer
                formName={formName}
                baseToken={baseToken}
                quoteToken={quoteToken}
                loggedIn={true}
                state={this.state}
                onInputChange={onInputChange}
                handleTxClick={handleTxClick}
              />
            }
          />
        </Tabs>
      </Card>
    );
  }
}
export default OrderForm;
