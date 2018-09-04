// @flow
import React from 'react';
import OrderFormRenderer from './OrderFormRenderer';
import { formatNumber, unformat } from 'accounting-js';

type Props = {
  formType: 'Buy' | 'Sell',
  askPrice: number,
  bidPrice: number,
  baseTokenBalance: number,
  quoteTokenBalance: number,
  baseToken: string,
  quoteToken: string,
  loggedIn: boolean,
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
    loggedIn: true,
    bidPrice: 0,
    askPrice: 0,
    baseTokenBalance: 0,
    quoteTokenBalance: 0,
  };

  state = {
    portion: 0,
    isOpen: true,
    priceType: 'null',
    selectedTabId: 'limit',
    price: '0.0',
    stopPrice: '0.0',
    limitPrice: '0.0',
    amount: '0.0',
    total: '0.0',
  };

  componentDidMount() {
    const { formType, askPrice, bidPrice } = this.props;

    formType === 'Buy'
      ? this.setState({ price: formatNumber(askPrice, { precision: 3 }) })
      : this.setState({ price: formatNumber(bidPrice, { precision: 3 }) });
  }

  onInputChange = ({ target }: Object) => {
    const { loggedIn } = this.props;
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
        loggedIn && this.handlePortion(target.value);
        break;
      default:
        break;
    }
  };

  handlePortion = (portion: number) => {
    const { price } = this.state;
    const { formType, quoteTokenBalance, baseTokenBalance } = this.props;
    let amount, total;

    if (formType === 'Sell') {
      amount = (baseTokenBalance / 100) * portion;
      total = unformat(price) * amount;

      this.setState({
        portion: portion,
        amount: formatNumber(amount, { precision: 3 }),
        total: formatNumber(total, { precision: 3 }),
      });
    } else {
      total = (quoteTokenBalance / 100) * portion;
      amount = total * unformat(price);

      this.setState({
        portion: portion,
        amount: formatNumber(amount, { precision: 3 }),
        total: formatNumber(total, { precision: 3 }),
      });
    }
  };

  handlePriceChange = (price: string) => {
    let { amount } = this.state;

    amount = unformat(amount);
    let total = amount * unformat(price);

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      price: price,
    });
  };

  handleLimitPriceChange = (limitPrice: string) => {
    let { amount, stopPrice } = this.state;

    amount = unformat(amount);
    stopPrice = unformat(stopPrice);

    this.setState({
      amount: formatNumber(amount, { precision: 3 }),
      stopPrice: formatNumber(stopPrice, { precision: 3 }),
      limitPrice: limitPrice,
    });
  };

  handleStopPriceChange = (stopPrice: string) => {
    let { amount } = this.state;

    amount = unformat(amount);
    let total = amount * unformat(stopPrice);

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      stopPrice: stopPrice,
    });
  };

  handleAmountChange = (amount: string) => {
    let { price, selectedTabId, stopPrice } = this.state;
    let total;

    stopPrice = unformat(stopPrice);
    price = unformat(price);

    selectedTabId === 'stop' ? (total = stopPrice * unformat(amount)) : (total = price * unformat(amount));

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      price: formatNumber(price, { precision: 3 }),
      amount: amount,
    });
  };

  handleTotalChange = (total: string) => {
    let { price, selectedTabId, stopPrice } = this.state;
    let amount;

    price = unformat(price);
    stopPrice = unformat(stopPrice);

    selectedTabId === 'stop'
      ? stopPrice === 0
        ? (amount = 0)
        : (amount = unformat(total) / stopPrice)
      : price === 0
        ? (amount = 0)
        : (amount = unformat(total) / price);

    this.setState({
      price: formatNumber(price, { precision: 3 }),
      stopPrice: formatNumber(stopPrice, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      total: total,
    });
  };

  handleChangeOrderType = (tabId: string) => {
    const { askPrice, bidPrice, formType } = this.props;

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

    if (tabId === 'limit' && formType === 'Buy') {
      this.setState({ price: formatNumber(askPrice, { precision: 3 }) });
    } else if (tabId === 'limit') {
      this.setState({ price: formatNumber(bidPrice, { precision: 3 }) });
    } else if (tabId === 'market' && formType === 'Buy') {
      this.setState({ price: formatNumber(askPrice, { precision: 3 }) });
    } else if (tabId === 'market') {
      this.setState({ price: formatNumber(bidPrice, { precision: 3 }) });
    }
  };

  handleSubmit = () => {};

  toggleCollapse = () => {
    this.setState(function(prevState) {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const {
      state: { selectedTabId, portion, priceType, price, isOpen, stopPrice, limitPrice, amount, total },
      props: { formType, baseToken, loggedIn, quoteToken },
      onInputChange,
      handleChangeOrderType,
      handleSubmit,
      toggleCollapse,
    } = this;

    return (
      <OrderFormRenderer
        selectedTabId={selectedTabId}
        formType={formType}
        portion={portion}
        priceType={priceType}
        price={price}
        stopPrice={stopPrice}
        limitPrice={limitPrice}
        amount={amount}
        total={total}
        isOpen={isOpen}
        baseToken={baseToken}
        quoteToken={quoteToken}
        loggedIn={loggedIn}
        onInputChange={onInputChange}
        toggleCollapse={toggleCollapse}
        handleChangeOrderType={handleChangeOrderType}
        handleSubmit={handleSubmit}
      />
    );
  }
}

export default OrderForm;
