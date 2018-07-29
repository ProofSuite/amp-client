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
  handleLimit: any => void,
  handleStopLimit: any => void,
};

type State = {
  portion: number,
  priceType: string,
  selectedTabId: string,
  price: number,
  stopPrice: number,
  limitPrice: number,
  amount: number,
  total: number,
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

  handlePortion = (e: SyntheticInputEvent<>) => {
    console.log(e);

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
        amount: round(amount, decimals),
        total: round(total, decimals),
      });
    } else {
      let total = (totalBaseBalance / 100) * portion;
      amount = total / price;
      this.setState({
        portion: portion,
        amount: round(amount, decimals),
        total: round(total, decimals),
      });
    }
  };

  handlePriceChange = (e: Object) => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let targetValue = parseFloat(e.target.value),
      total = amount * targetValue;

    this.setState({
      total: round(total, decimals),
      price: targetValue,
    });
  };

  handleLimitPriceChange = (e: SyntheticInputEvent<>) => {
    let targetValue = parseFloat(e.target.value),
      total = this.state.amount * targetValue;

    this.setState({
      // total: Math.floor(total * Math.pow(10, 7)) / Math.pow(10, 7),
      limitPrice: targetValue,
    });
  };

  handleStopPriceChange = (e: SyntheticInputEvent<>) => {
    const {
      state: { amount },
      props: { decimals },
    } = this;
    let targetValue = parseFloat(e.target.value),
      total = amount * targetValue;

    this.setState({
      total: round(total, decimals),
      stopPrice: targetValue,
    });
  };

  handleAmountChange = (e: SyntheticInputEvent<>) => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let total,
      targetValue = parseFloat(e.target.value);

    if (selectedTabId === 'stop') {
      total = stopPrice * targetValue;
    } else {
      total = price * targetValue;
    }
    this.setState({
      total: round(total, decimals),
      amount: targetValue,
    });
  };

  handleTotalChange = (e: SyntheticInputEvent<>) => {
    const {
      state: { price, selectedTabId, stopPrice },
      props: { decimals },
    } = this;
    let amount: number,
      targetValue = parseFloat(e.target.value);

    if (selectedTabId === 'stop') {
      amount = parseFloat(targetValue / stopPrice);
    } else {
      amount = parseFloat(targetValue / price);
    }
    this.setState({
      amount: round(amount, decimals),
      total: parseFloat(e.target.value),
    });
  };

  handlePriceType = (e: SyntheticInputEvent<>) => {
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

  changeTab = (tabId: string) => {
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

  onInputChange = (props: Object) => {
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
        this.resetRadios();
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
                loggedIn={loggedIn}
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
                loggedIn={loggedIn}
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
