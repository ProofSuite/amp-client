// @flow
import React from 'react';
import { OrderBookRenderer } from './OrderBookRenderer';
import styled from 'styled-components';
import { sortArray } from '../../utils/helpers';
import type Props from '../../types/orderBook';

export default class OrderBook extends React.PureComponent<Props> {
  static defaultProps = {
    decimals: 6,
  };

  render() {
    const { buyOrderList, sellOrderList, baseToken, quoteToken, decimals } = this.props;
    return (
      <div className="order-book-renderer">
        <OrderBookRenderer
          orderList={sortArray(sellOrderList, 'price')}
          bookName="Sell"
          baseToken={baseToken}
          quoteToken={quoteToken}
          decimals={decimals}
        />
        <OrderBookRenderer
          orderList={sortArray(buyOrderList, 'price')}
          bookName="Buy"
          baseToken={baseToken}
          quoteToken={quoteToken}
          decimals={decimals}
        />
      </div>
    );
  }
}
