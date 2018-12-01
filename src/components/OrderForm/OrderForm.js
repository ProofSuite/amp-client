// @flow
import React from 'react'
import OrderFormRenderer from './OrderFormRenderer'
import { formatNumber, unformat } from 'accounting-js'
import { utils } from 'ethers'

type Props = {
  side: 'BUY' | 'SELL',
  askPrice: number,
  bidPrice: number,
  baseTokenBalance: number,
  quoteTokenBalance: number,
  baseToken: string,
  quoteToken: string,
  baseTokenDecimals: number,
  quoteTokenDecimals: number,
  loggedIn: boolean,
  sendNewOrder: (string, number, number) => void,
  makeFee: string,
  takeFee: string,
}

type State = {
  fraction: number,
  priceType: string,
  selectedTabId: string,
  price: string,
  stopPrice: string,
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

  constructor(props: Props) {
    super(props)

    let price
    //TODO: not quite sure whether the suggested price should be equal to
    //the ask price, the bid price or somewhere in between
    props.side === 'SELL'
      ? price = this.props.bidPrice
      : price = this.props.askPrice

    this.state = {
      fraction: 0,
      isOpen: true,
      priceType: 'null',
      selectedTabId: 'limit',
      price: formatNumber(price, { precision: 3 }),
      stopPrice: formatNumber(price, { precision: 3 }),
      amount: '0.0',
      total: '0.0'
    }
  }

  componentWillReceiveProps({ side, bidPrice, askPrice, selectedOrder }) {
    if (selectedOrder === null || selectedOrder === this.props.selectedOrder) {
      return;
    }

    const { price, total } = selectedOrder;

    if ((side === 'BUY' && price > bidPrice) || (side === 'SELL' && price < askPrice)) {
      this.setState({
        price: price,
        amount: total,
        total: price * total,
      });
    }

  }

  onInputChange = ({ target }: Object) => {
    const { loggedIn } = this.props
    switch (target.name) {
      case 'stopPrice':
        this.handleStopPriceChange(target.value)
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

      default:
        break
    }
  }

  handleSendOrder = () => {
    let { amount, price } = this.state
    let { side } = this.props

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
      amount = total / unformat(price)

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

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const {
      state: { selectedTabId, fraction, priceType, price, isOpen, amount, total },
      props: { side, baseToken, loggedIn, quoteToken, baseTokenBalance, quoteTokenBalance, makeFee, takeFee, baseTokenDecimals, quoteTokenDecimals },
      onInputChange,
      handleChangeOrderType,
      handleSendOrder,
      toggleCollapse,
    } = this

    let maxAmount
    let formattedMakeFee = utils.formatUnits(makeFee, quoteTokenDecimals)
    let maxQuoteTokenAmount = quoteTokenBalance - Number(formattedMakeFee)

    if (price !== '0.000') {
      if (side === 'BUY') {
        maxAmount = formatNumber(maxQuoteTokenAmount / unformat(price), { decimals: 3 })
      } else {
        maxAmount = formatNumber(baseTokenBalance, { decimals: 3 })
      }
    } else {
      maxAmount = '0.0'
    }

    // (price !== '0.000')
    // ? maxAmount = side === 'BUY'
    //   ? formatNumber((quoteTokenBalance - makeFee) / unformat(price), { decimals: 3 })
    //   : formatNumber(baseTokenBalance, { decimals: 3 })
    // : maxAmount = '0.0'

    let insufficientBalance = (unformat(amount) > unformat(maxAmount))

    return (
      <OrderFormRenderer
        selectedTabId={selectedTabId}
        side={side}
        fraction={fraction}
        priceType={priceType}
        price={price}
        maxAmount={maxAmount}
        amount={amount}
        total={total}
        isOpen={isOpen}
        baseToken={baseToken}
        quoteToken={quoteToken}
        insufficientBalance={insufficientBalance}
        loggedIn={loggedIn}
        onInputChange={onInputChange}
        toggleCollapse={toggleCollapse}
        handleChangeOrderType={handleChangeOrderType}
        handleSendOrder={handleSendOrder}
        makeFee={makeFee}
        takeFee={takeFee}
        baseTokenDecimals={baseTokenDecimals}
        quoteTokenDecimals={quoteTokenDecimals}
      />
    )
  }
}

export default OrderForm
