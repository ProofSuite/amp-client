// @flow
import React from 'react'
import OHLCV from '../../components/OHLCV'
import OrdersTable from '../../components/OrdersTable'
import OrderForm from '../../components/OrderForm'
import TradesTable from '../../components/TradesTable'
import TokenSearcher from '../../components/TokenSearcher'
import OrderBook from '../../components/OrderBook'
import { CloseableCallout, EmphasizedText } from '../../components/Common'
import { Redirect } from 'react-router-dom'
import { AutoSizer } from 'react-virtualized'
import { SizesAsNumbers as Sizes } from '../../components/Common/Variables'

import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = Responsive

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
  layouts: LayoutMap,
  collapsedItems: any,
  currentBreakpoint: string,
}

type Layout = Array<Object>
type LayoutMap = { [string]: Layout }

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

const fullScreenOHLCVLayouts: Layout = {
  'lg': {i: 'ohlcv', x: 0, y: 0, w: 60, h: 60 },
  'md': {i: 'ohlcv', x: 0, y: 0, w: 60, h: 60 },
  'sm': {i: 'ohlcv', x: 0, y: 0, w: 60, h: 60 },
  'xs': {i: 'ohlcv', x: 0, y: 0, w: 60, h: 60 }
}

// const defaultSizes = {
//   'lg': {
//     'tokenSearcher': { x: 0, y: 0, w: 12, h: 30, minW: 12 },
//     'orderForm': { x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
//     'ohlcv': { x: 12, y: 0, w: 48, h: 30},
//     'ordersTable': { x: 12, y: 30, w: 48, h: 20 },
//     'orderBook': { x: 12, y: 50, w: 24, h: 30 },
//     'tradesTable': { x: 36, y: 50, w: 24, h: 30 },
//   },
//   'md': {
//     'tokenSearcher': { x: 0, y: 0, w: 12, h: 30, minW: 12 },
//     'orderForm': { x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
//     'ohlcv': { x: 12, y: 0, w: 48, h: 30},
//     'ordersTable': { x: 12, y: 30, w: 48, h: 20 },
//     'orderBook': { x: 12, y: 50, w: 24, h: 30 },
//     'tradesTable': { x: 36, y: 50, w: 24, h: 30 },
//   },
//   'sm': {
//     'tokenSearcher': { x: 0, y: 0, w: 12, h: 30, minW: 12 },
//     'orderForm': { x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
//     'ohlcv': { x: 12, y: 0, w: 48, h: 30},
//     'ordersTable': { x: 12, y: 30, w: 48, h: 20 },
//     'orderBook': { x: 12, y: 50, w: 24, h: 30 },
//     'tradesTable': { x: 36, y: 50, w: 24, h: 30 },
//   },
//   'xs': {
//     'tokenSearcher': { x: 0, y: 0, w: 12, h: 30, minW: 12 },
//     'orderForm': { x: 0, y: 30, w: 12, h: 16, minH: 16, maxH: 16 },
//     'ohlcv': { x: 12, y: 0, w: 48, h: 30},
//     'ordersTable': { x: 12, y: 30, w: 48, h: 20 },
//     'orderBook': { x: 12, y: 50, w: 24, h: 30 },
//     'tradesTable': { x: 36, y: 50, w: 24, h: 30 },
//   }
// }

const defaultLayouts = {
  'lg': [
    {i: 'tokenSearcher', x: 0, y: 0, w: 12, h: 28, minW: 12 },
    {i: 'orderForm', x: 0, y: 35, w: 12, h: 16, minH: 16, maxH: 16 },
    {i: 'ohlcv', x: 12, y: 0, w: 36, h: 28 },
    {i: 'ordersTable', x: 12, y: 35, w: 23, h: 16 },
    {i: 'orderBook', x: 48, y: 0, w: 12, h: 28 },
    {i: 'tradesTable', x: 35, y: 35, w: 25, h: 16 },
  ],
  'md': [
    {i: 'tokenSearcher', x: 0, y: 0, w: 18, h: 30, minW: 12 },
    {i: 'orderForm', x: 0, y: 30, w: 18, h: 16, minH: 18, maxH: 18 },
    {i: 'ohlcv', x: 18, y: 0, w: 42, h: 30 },
    {i: 'ordersTable', x: 18, y: 30, w: 42, h: 20 },
    {i: 'orderBook', x: 18, y: 50, w: 21, h: 30 },
    {i: 'tradesTable', x: 39, y: 50, w: 21, h: 30 },
  ],
  'sm': [
    {i: 'tokenSearcher', x: 0, y: 0, w: 30, h: 16, minW: 12 },
    {i: 'orderForm', x: 30, y: 0, w: 30, h: 16, minH: 16, maxH: 16 },
    {i: 'ohlcv', x: 0, y: 16, w: 60, h: 30 },
    {i: 'ordersTable', x: 0, y: 106, w: 60, h: 20 },
    {i: 'orderBook', x: 0, y: 46, w: 30, h: 30 },
    {i: 'tradesTable', x: 30, y: 46, w: 30, h: 30 },
  ],
  'xs': [
    {i: 'tokenSearcher', x: 0, y: 0, w: 60, h: 20, minW: 12 },
    {i: 'orderForm', x: 0, y: 40, w: 60, h: 16, minH: 16, maxH: 16 },
    {i: 'ohlcv', x: 0, y: 20, w: 60, h: 20 },
    {i: 'ordersTable', x: 0, y: 56, w: 60, h: 20 },
    {i: 'orderBook', x: 0, y: 76, w: 60, h: 20 },
    {i: 'tradesTable', x: 0, y: 96, w: 60, h: 20 },
  ]
}

class TradingPage extends React.PureComponent<Props, State> {

  state = {
    calloutVisible: false,
    calloutOptions: {},
    layouts: defaultLayouts,
    currentBreakpoint: 'lg',
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

  closeCallout = () => {
    this.setState({ calloutVisible: false })
  }

  onCollapse = (item: string) => {
    let { currentBreakpoint, layouts } = this.state
    let newLayout = []
    let currentLayout = layouts[currentBreakpoint]

    currentLayout.forEach(elem => {
      if (elem.i === item) {
        this.state.collapsedItems[item]
        ? newLayout.push({ ...elem, h: defaultSizes[item].h })
        : newLayout.push({ ...elem, h: 4 })
      } else {
        newLayout.push(elem)
      }
    })

    let newLayouts = { ...this.state.layouts, [currentBreakpoint]: newLayout }
    this.setState({ layouts: newLayouts, collapsedItems: {
      ...this.state.collapsedItems, 
      [item]: !this.state.collapsedItems[item]
      }
    })
  }

  onFullScreenOHLCV = () => {
    this.setState({ layouts: fullScreenOHLCVLayouts })
  }

  onLayoutChange = (currentLayout: Layout, layouts: LayoutMap) => {
    this.setState({ layouts })
  }

  onBreakpointChange = (currentBreakpoint: string, newCols: number) => {
    console.log('the current breakpoint', currentBreakpoint, newCols)
    this.setState({ currentBreakpoint })
  }

  onResetDefaultLayout = () => {
    this.setState({ 
      layouts: defaultLayouts,
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
    let { currentBreakpoint, layouts } = this.state
    let currentLayout = layouts[currentBreakpoint]

    let currentItem = currentLayout.filter(elem => elem.i === item)[0]
    let otherItems = currentLayout.filter(elem => elem.i !== item)
    let { y: yc, h: hc, x: xc, w: wc } = currentItem

    let newX = 0
    let newXPlusW = 60 // number of columns
    let newYPlusH = 100000

    otherItems.forEach(elem => {
      let { x, y, h, w, i } = elem
      
      // check if items heights overlap
      if ((yc < (y + h) && (yc + hc) >= (y + h)) || (yc <= y && (yc + hc) > y))
      {
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
    currentLayout.forEach(elem => {
      if (elem.i === item) {
        newLayout.push({ ...elem, x: newX, w: newXPlusW - newX, h: newYPlusH - yc })
      } else {
        newLayout.push(elem)
      }
    })

    let newLayouts = { ...this.state.layouts, [currentBreakpoint]: newLayout }
    this.setState({ layouts: newLayouts })
  }

  render() {
    const { authenticated, isInitiated } = this.props
    const { calloutOptions, calloutVisible, layouts } = this.state

    if (!authenticated) return <Redirect to="/login" />
    if (!isInitiated) return null;
    
    return (
      <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ width, height }) => (
          <ResponsiveReactGridLayout
            width={width}
            layouts={layouts}
            breakpoints={{lg: Sizes.laptop, md: Sizes.tablet, sm: Sizes.mobileL, xs: Sizes.mobileM, xxs: Sizes.mobileS }}
            cols={{lg:60, md: 60, sm: 60, xs: 60, xxs: 60 }}
            onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
            onBreakpointChange={this.onBreakpointChange}
            className="layout"
            rowHeight={10}
            compactType="vertical"
            draggableHandle=".dragMe"
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
                onResetDefaultLayout={this.onResetDefaultLayout}
              />
            </div>
            <div key="orderForm">
              <OrderForm
                onCollapse={this.onCollapse}
                onExpand={this.onExpand}
                onResetDefaultLayout={this.onResetDefaultLayout}
              />
            </div>
            <div key="ohlcv">
              <OHLCV
                onCollapse={this.onCollapse}
                onExpand={this.onExpand}
                onResetDefaultLayout={this.onResetDefaultLayout}
                onFullScreen={this.onFullScreenOHLCV}
              />
            </div>
            <div key="ordersTable">
              <OrdersTable
                onCollapse={this.onCollapse}
                onExpand={this.onExpand}
                onResetDefaultLayout={this.onResetDefaultLayout}
              />
            </div>
            <div key="orderBook">
              <OrderBook
                onCollapse={this.onCollapse}
                onExpand={this.onExpand}
                onResetDefaultLayout={this.onResetDefaultLayout}
              />
            </div>
            <div key="tradesTable">
              <TradesTable
                onCollapse={this.onCollapse}
                onExpand={this.onExpand}
                onResetDefaultLayout={this.onResetDefaultLayout}
              />
            </div>
          </ResponsiveReactGridLayout>
        )}
      </AutoSizer>
    )
  }
}

export default TradingPage
