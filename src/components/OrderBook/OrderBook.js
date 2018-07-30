// @flow
import React from 'react';
import { OrderBookRenderer } from './OrderBookRenderer';
import { sortArray } from '../../utils/helpers';
import type { OrderBookState } from '../../types/orderBook';

type Props = {
  orderList: Array<Object>,
  quoteToken: string,
  baseToken: string,
  bookName: string,
  decimals: number,
};

export default class OrderBook extends React.PureComponent<Props> {
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
