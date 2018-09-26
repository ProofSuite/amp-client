// @flow
import React from 'react'
import OrderFormRenderer from './OrderFormRenderer'
import { formatNumber, unformat } from 'accounting-js'

type Props = {
  side: 'BUY' | 'SELL',
  askPrice: number,
  bidPrice: number,
  baseTokenBalance: number,
  quoteTokenBalance: number,
  baseToken: string,
  quoteToken: string,
  loggedIn: boolean,
  sendNewOrder: (string, number, number) => void
}

type State = {
  fraction: number,
  priceType: string,
  selectedTabId: string,
  price: string,
  stopPrice: string,
  limitPrice: string,
  amount: string,
  total: string,
  isOpen: boolean
}

class OrderForm extends React.PureComponent<Props, State> {
  static defaultProps = {
    loggedIn: true,
    bidPrice: 0,
    askPrice: 0,
    baseTokenBalance: 0,
    quoteTokenBalance: 0
  }

  state = {
    fraction: 0,
    isOpen: true,
    priceType: 'null',
    selectedTabId: 'limit',
    price: '0.0',
    stopPrice: '0.0',
    limitPrice: '0.0',
    amount: '0.0',
    total: '0.0'
  }

  componentDidMount() {
    const { side, askPrice, bidPrice } = this.props

    side === 'BUY'
      ? this.setState({ price: formatNumber(askPrice, { precision: 3 }) })
      : this.setState({ price: formatNumber(bidPrice, { precision: 3 }) })
  }

  onInputChange = ({ target }: Object) => {
    const { loggedIn } = this.props
    switch (target.name) {
      case 'stopPrice':
        this.handleStopPriceChange(target.value)
        break
      case 'limitPrice':
        this.handleLimitPriceChange(target.value)
        break
      case 'price':
        this.handlePriceChange(target.value)
        break
      case 'total':
        this.handleTotalChange(target.value)
        break
      case 'amount':
        this.handleAmountChange(target.value)
        break
      case 'fraction':
        loggedIn && this.handleUpdateAmountFraction(target.value)
        break
      case 'order':
        this.handleSendOrder()
      default:
        break
    }
  }

  handleSendOrder = () => {
    let { amount, price } = this.state
    let { side } = this.props
    // const { side, baseToken, quoteToken, baseTokenBalance, quoteTokenBalance } = this.props

    amount = unformat(amount)
    price = unformat(price)

    this.props.sendNewOrder(side, amount, price)
  }

  handleUpdateAmountFraction = (fraction: number) => {
    const { price } = this.state
    const { side, quoteTokenBalance, baseTokenBalance } = this.props
    let amount, total

    if (side === 'SELL') {
      amount = (baseTokenBalance / 100) * fraction
      total = unformat(price) * amount

      this.setState({
        fraction: fraction,
        amount: formatNumber(amount, { precision: 3 }),
        total: formatNumber(total, { precision: 3 })
      })
    } else {
      total = (quoteTokenBalance / 100) * fraction
      amount = total * unformat(price)

      this.setState({
        fraction: fraction,
        amount: formatNumber(amount, { precision: 3 }),
        total: formatNumber(total, { precision: 3 })
      })
    }
  }

  handlePriceChange = (price: string) => {
    let { amount } = this.state

    amount = unformat(amount)
    let total = amount * unformat(price)

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      price: price
    })
  }

  handleLimitPriceChange = (limitPrice: string) => {
    let { amount, stopPrice } = this.state

    amount = unformat(amount)
    stopPrice = unformat(stopPrice)

    this.setState({
      amount: formatNumber(amount, { precision: 3 }),
      stopPrice: formatNumber(stopPrice, { precision: 3 }),
      limitPrice: limitPrice
    })
  }

  handleStopPriceChange = (stopPrice: string) => {
    let { amount } = this.state

    amount = unformat(amount)
    let total = amount * unformat(stopPrice)

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      stopPrice: stopPrice
    })
  }

  handleAmountChange = (amount: string) => {
    let { price, selectedTabId, stopPrice } = this.state
    let total

    stopPrice = unformat(stopPrice)
    price = unformat(price)

    selectedTabId === 'stop' ? (total = stopPrice * unformat(amount)) : (total = price * unformat(amount))

    this.setState({
      total: formatNumber(total, { precision: 3 }),
      price: formatNumber(price, { precision: 3 }),
      amount: amount
    })
  }

  handleTotalChange = (total: string) => {
    let { price, selectedTabId, stopPrice } = this.state
    let amount

    price = unformat(price)
    stopPrice = unformat(stopPrice)

    selectedTabId === 'stop'
      ? stopPrice === 0
        ? (amount = 0)
        : (amount = unformat(total) / stopPrice)
      : price === 0
        ? (amount = 0)
        : (amount = unformat(total) / price)

    this.setState({
      price: formatNumber(price, { precision: 3 }),
      stopPrice: formatNumber(stopPrice, { precision: 3 }),
      amount: formatNumber(amount, { precision: 3 }),
      total: total
    })
  }

  handleChangeOrderType = (tabId: string) => {
    const { askPrice, bidPrice, side } = this.props

    this.setState({
      selectedTabId: tabId,
      fraction: 0,
      priceType: 'null',
      price: '',
      stopPrice: '',
      limitPrice: '',
      amount: '',
      total: ''
    })

    if (tabId === 'limit' && side === 'BUY') {
      this.setState({ price: formatNumber(askPrice, { precision: 3 }) })
    } else if (tabId === 'limit') {
      this.setState({ price: formatNumber(bidPrice, { precision: 3 }) })
    } else if (tabId === 'market' && side === 'BUY') {
      this.setState({ price: formatNumber(askPrice, { precision: 3 }) })
    } else if (tabId === 'market') {
      this.setState({ price: formatNumber(bidPrice, { precision: 3 }) })
    }
  }

  handleSubmit = () => {}

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const {
      state: { selectedTabId, fraction, priceType, price, isOpen, stopPrice, limitPrice, amount, total },
      props: { side, baseToken, loggedIn, quoteToken },
      onInputChange,
      handleChangeOrderType,
      handleSubmit,
      toggleCollapse
    } = this

    return (
      <OrderFormRenderer
        selectedTabId={selectedTabId}
        side={side}
        fraction={fraction}
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
    )
  }
}

export default OrderForm
