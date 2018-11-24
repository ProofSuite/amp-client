//@flow
import React from 'react'
import OrdersTableRenderer from './OrdersTableRenderer'
import { sortTable } from '../../utils/helpers'

import type { Order } from '../../types/Orders'

type Props = {
  orders: Array<Order>,
  authenticated: false,
  cancelOrder: string => void,
}

type State = {
  selectedTabId: string,
  isOpen: boolean
}

class OrdersTable extends React.PureComponent<Props, State> {
  static defaultProps = { authenticated: true }

  state = {
    selectedTabId: 'all',
    isOpen: false
  }

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId })
  }

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  filterOrders = () => {
    const { orders } = this.props
    let result = { ALL: orders, OPEN: [], CANCELLED: [], PARTIALLY_FILLED: [], FILLED: [] }
    let filters = ['OPEN', 'CANCELLED', 'PARTIALLY_FILLED', 'FILLED']

    for (let filter of filters) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = orders.filter(order => {
        return order.status === filter
      })
    }

    //The partially filled orders are considered to be in the OPEN section
    result['OPEN'] = result['OPEN'].concat(result['PARTIALLY_FILLED'])

    for (let filter of filters.concat('ALL')) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = sortTable(result[filter], 'time', 'desc')
    }

    return result
  }

  render() {
    const { authenticated, orders, cancelOrder } = this.props
    const { selectedTabId, isOpen } = this.state
    const filteredOrders = this.filterOrders()
    const loading = orders.length === []

    return (
      <OrdersTableRenderer
        isOpen={isOpen}
        loading={loading}
        selectedTabId={selectedTabId}
        onChange={this.changeTab}
        toggleCollapse={this.toggleCollapse}
        authenticated={authenticated}
        cancelOrder={cancelOrder}
        // silence-error: currently too many flow errors, waiting for rest to be resolved
        orders={filteredOrders}
      />
    )
  }
}

export default OrdersTable
