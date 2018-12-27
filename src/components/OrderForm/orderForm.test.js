import React from 'react'
import { shallow } from 'enzyme'
import OrderForm from './OrderForm'



it('renders without crashing', () => {
  shallow(
    <OrderForm
      askPrice={0.25}
      bidPrice={0.29}
      quoteTokenBalance={1000}
      baseTokenBalance={10}
      side="SELL"
      quoteTokenSymbol="WETH"
      baseTokenSymbol="DAI"
      loggedIn={false}
      makeFee="50000"
      takeFee="50000"
      pairIsAllowed={true}
      selectedOrder={null}
      quoteTokenDecimals={18}
      baseTokenDecimals={18}
      unlockPair={jest.fn()}
      sendNewOrder={jest.fn()}
    />
  )
})

describe('tests Functions and state', () => {
  let wrapper, instance

  beforeEach(() => {
    wrapper = shallow(
      <OrderForm
        askPrice={0.25}
        bidPrice={0.29}
        quoteTokenBalance={1000}
        baseTokenBalance={10}
        side="SELL"
        quoteToken="WETH"
        baseToken="DAI"
        loggedIn={true}
        makeFee="50000"
        takeFee="50000"
        quoteTokenDecimals={18}
        baseTokenDecimals={18}
      />
    )

    instance = wrapper.instance()
  })

  it('changes order form type Successfully', () => {
    expect(instance.state.selectedTabId).toEqual('limit')
    instance.handleChangeOrderType('market')
    expect(instance.state.selectedTabId).toEqual('market')
  })

  it('verifies Prices', () => {
    expect(instance.props.askPrice).toEqual(0.25)
    expect(instance.props.bidPrice).toEqual(0.29)
  })

  it('validates onAmountChange Func', () => {
    instance.onInputChange({ target: { name: 'amount', value: '10' } })
    expect(instance.state.total).toEqual('2.900')
  })

  it('validates onPriceChange Func', () => {
    instance.onInputChange({ target: { name: 'price', value: '0.39' } })
    instance.onInputChange({ target: { name: 'amount', value: '10' } })
    expect(instance.state.total).toEqual('3.900')
  })

  it('validates onTotalChange Func', () => {
    instance.onInputChange({ target: { name: 'price', value: '0.25' } })
    instance.onInputChange({ target: { name: 'total', value: '10' } })
    expect(instance.state.amount).toEqual('40.000')
  })

  it('validates onFractionChange Func', () => {
    instance.onInputChange({ target: { name: 'fraction', value: 50 } })
    expect(instance.state.amount).toEqual('1,724.138')
  })
})
