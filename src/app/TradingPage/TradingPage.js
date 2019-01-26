// @flow
import React from 'react'
import styled from 'styled-components'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { CloseableCallout, EmphasizedText } from '../../components/Common'
import { Grid } from 'styled-css-grid'
import { Redirect } from 'react-router-dom'
import { AutoSizer } from 'react-virtualized'

import { Spring } from 'react-spring'
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(GridLayout)


type Props = {
  authenticated: boolean,
  isConnected: boolean,
  isInitiated: boolean,
  balancesLoading: boolean,
  baseTokenBalance: string,
  quoteTokenBalance: string,
  baseTokenAllowance: string,
  quoteTokenAllowance: string,
  baseTokenSymbol: string,
  quoteTokenSymbol: string,
  pairIsAllowed: boolean,
  pairName: string,
  queryTradingPageData: () => void,
  makeFee: string, 
  takeFee: string,
  toggleAllowances: (string, string) => void,
}

type State = {
  calloutVisible: boolean,
  calloutOptions: Object,
  layout: Array<Object>,
  collapsedItems: any
}

type Layout = Array<Object>

const defaultSizes = {
  'tokenSearcher': { x: 0, y: 0, w: 12, h: 30, minW: 12 },
  'orderForm': { x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
  'ohlcv': { x: 12, y: 0, w: 48, h: 30},
  'ordersTable': { x: 12, y: 30, w: 48, h: 20 },
  'orderBook': { x: 12, y: 50, w: 24, h: 30 },
  'tradesTable': { x: 36, y: 50, w: 24, h: 30 },
}

const defaultLayout: Layout = [
  {i: 'tokenSearcher', x: 0, y: 0, w: 12, h: 30, minW: 12 },
  {i: 'orderForm', x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
  {i: 'ohlcv', x: 12, y: 0, w: 48, h: 30 },
  {i: 'ordersTable', x: 12, y: 30, w: 48, h: 20 },
  {i: 'orderBook', x: 12, y: 50, w: 24, h: 30 },
  {i: 'tradesTable', x: 36, y: 50, w: 24, h: 30 },
]

class TradingPage extends React.PureComponent<Props, State> {

  state = {
    calloutVisible: false,
    calloutOptions: {},
    layout: defaultLayout,
    collapsedItems: {
      'tokenSearcher': false,
      'orderForm': false,
      'ohlcv': false,
      'ordersTable': false,
      'orderBook': false,
      'tradesTable': false
    }
  }

  callouts = {
    notAuthenticated: () => ({
      title: 'Authenticated Required',
      intent: 'danger',
      message: 'Please authenticate to start trading'
    }),
    quoteTokensLocked: () => {
      const { baseTokenSymbol, quoteTokenSymbol } = this.props
      
    return {
      title: `Unlock tokens to start trading`,
      intent: 'danger',
      message: (
          <React.Fragment>
            To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
            Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
          </React.Fragment>
        )
      }
    },
    baseTokensLocked: () => {
      const { 
        baseTokenSymbol, 
        quoteTokenSymbol, 
      } = this.props

      return {
        title: `Unlock tokens to start trading`,
        intent: 'danger',
        message: (
          <React.Fragment>
            To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
            Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
          </React.Fragment>
        )
      }
    },
    tokensLocked: () => {
      const { baseTokenSymbol, quoteTokenSymbol } = this.props

      return {
        title: `Unlock tokens to start trading`,
        intent: `danger`,
        message: (
            <React.Fragment>
              To start trading a currency pair, unlock trading for both tokens ({baseTokenSymbol} and {quoteTokenSymbol}).
              Click <EmphasizedText onClick={() => this.props.toggleAllowances(baseTokenSymbol, quoteTokenSymbol)}>here</EmphasizedText> to unlock {baseTokenSymbol}/{quoteTokenSymbol}
            </React.Fragment>
          )
        }
      }
    }

  componentDidMount() {
    if (this.props.isConnected) {
      this.props.queryTradingPageData();
    }

    // this.checkIfCalloutRequired()
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isConnected || !this.props.isConnected) {
      return;
    }

    this.props.queryTradingPageData();
  }

  onLayoutChange = (layout: Layout) => {
    this.setState({ layout })
  }

  checkIfCalloutRequired = () => {
    const {
      authenticated,
      baseTokenBalance,
      quoteTokenBalance,
      pairIsAllowed,
     } = this.props

    if (!authenticated) {
      let calloutOptions = this.callouts.notAuthenticated()
      this.setState({ calloutVisible: true, calloutOptions })
    }

    if (baseTokenBalance === '0.0' && quoteTokenBalance === '0.0') {
      return
    }

    if (!pairIsAllowed) {
      let calloutOptions = this.callouts.tokensLocked()
      return this.setState({ calloutVisible: true, calloutOptions })
    }
  }

  onBreakpointChange = breakpoint => {
    this.setState({ currentBreakpoint: breakpoint })
  }

  closeCallout = () => {
    this.setState({ calloutVisible: false })
  }

  onCollapse = (item: string) => {
    let newLayout = []

    this.state.layout.forEach(elem => {
      if (elem.i === item) {
        this.state.collapsedItems[item]
        ? newLayout.push({ ...elem, h: defaultSizes[item].h })
        : newLayout.push({ ...elem, h: 4 })
      } else {
        newLayout.push(elem)
      }
    })

    this.setState({ layout: newLayout, collapsedItems: {
      ...this.state.collapsedItems, 
      [item]: !this.state.collapsedItems[item]
      }
    })
  }

  onLayoutChange(layout: Layout) {
    this.setState({ layout })
  }

  onResetDefaultLayout() {
    this.setState({ 
      layout: defaultLayout,
      collapsedItems: {
        'tokenSearcher': false,
        'orderForm': false,
        'ohlcv': false,
        'ordersTable': false,
        'orderBook': false,
        'tradesTable': false
      }
    })
  }

  onExpand = (item: string) => {
    let currentItem = this.state.layout.filter(elem => elem.i === item)[0]
    let otherItems = this.state.layout.filter(elem => elem.i !== item)
    console.log('Current item', currentItem)
    let { y: yc, h: hc, x: xc, w: wc } = currentItem
    console.log('yc:',yc,'hc:', hc,'xc:',xc,'wc:', wc)

    let newX = 0
    let newXPlusW = 60 // number of columns
    let newYPlusH = 100000

    otherItems.forEach(elem => {
      let { x, y, h, w, i } = elem
      

      // check if items heights overlap
      if ((yc < (y + h) && (yc + hc) >= (y + h)) || (yc <= y && (yc + hc) > y))
      {
        console.log('Overlap vertically', elem.i)

        //left side collision detection
        if ((x + w) <= xc) {
          if ((x + w) > newX) newX = x + w
        }
        
        //probably x + w
        //right side collision detection        
        if (x >= (xc + wc)) {
          if (x < newXPlusW) newXPlusW = x
        }
      }

      // check if items lengths overlap
      if (((xc > x) && (xc <= (x + w))) || (((xc + wc) > x) && ((xc+wc) <= (x + w))))
      {
        console.log('Overlap horizontally', elem.i)
        console.log(i, 'y:',y,'h:', h,'x:',x,'w:', w)
        //down side side collision detection
        //we only expand vertically if the difference below is small
        if ((yc + hc) <= y && (y < (yc + hc + 100))) {
          if (y < newYPlusH) newYPlusH = y
        }
      }
    })

    //we didn't find a nearby element blocking vertically
    if (newYPlusH === 100000) newYPlusH = yc + hc

    let newLayout = []    
    this.state.layout.forEach(elem => {
      if (elem.i === item) {
        newLayout.push({ ...elem, x: newX, w: newXPlusW - newX, h: newYPlusH - yc })
      } else {
        newLayout.push(elem)
      }
    })

    console.log('The new layout is', newLayout)
    this.setState({ layout: newLayout })
  }

  render() {
    const { authenticated, isInitiated } = this.props
    const { calloutOptions, calloutVisible, layout } = this.state

    if (!authenticated) return <Redirect to="/login" />
    if (!isInitiated) return null;
    
    return (
      <ResponsiveReactGridLayout
        layout={layout}
        // layouts={layouts}
        // onBreakpointChange={this.onBreakpointChange}
        // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        // cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        onLayoutChange={this.onLayoutChange}
        className="layout"
        rowHeight={10}
        cols={60}
        compactType="vertical"
      >
        {/* <CloseableCallout
          visible={calloutVisible}
          handleClose={this.closeCallout}
          {...calloutOptions}
        /> */}
        <div key="tokenSearcher">
          <TokenSearcher
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
          />
        </div>
        <div key="orderForm">
          <OrderForm
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
           />
        </div>
        <div key="ohlcv">
          <OHLCV
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
           />
        </div>
        <div key="ordersTable">
          <OrdersTable
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
           />
        </div>
        <div key="orderBook">
          <OrderBook
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
          />
        </div>
        <div key="tradesTable">
          <TradesTable
            onCollapse={this.onCollapse}
            onExpand={this.onExpand}
           />
        </div>
      </ResponsiveReactGridLayout>
    )
  }
}

export default TradingPage
