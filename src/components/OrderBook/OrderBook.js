// @flow
import React from 'react';
import { OrderBookRenderer } from './OrderBookRenderer';
import styled from 'styled-components';
import { sortArray } from '../../utils/helpers';
import type { OrderBookState } from '../../types/orderBook';

export default class OrderBook extends React.PureComponent<OrderBookState> {
  static defaultProps = {
    decimals: 6,
  };

  render() {
    const { orderList, bookName, baseToken, quoteToken, decimals } = this.props;
    return (
      <div className="order-book-renderer">
        <OrderBookRenderer
          orderList={sortArray(orderList, 'price')}
          bookName={bookName}
          baseToken={baseToken}
          quoteToken={quoteToken}
          decimals={decimals}
        />
      </div>
    );
  }
}
