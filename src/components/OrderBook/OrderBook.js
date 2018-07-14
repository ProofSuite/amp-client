// @flow
import React from 'react';
import Loading from '../Loading';
import { reduceDecimals } from '../../utils/converters';
import type { OrderListTypes, SingleOrderTypes } from '../../types/orderBook';

type ListTypes = OrderListTypes;
type SingleOrderProps = SingleOrderTypes;

export const OrderBook = (props: ListTypes) => {
  const { bookName, loading, quoteToken, baseToken, decimals, orderList } = props;
  return (
    <div className={bookName + ' order-book inner pt-dark'}>
      <h5>{bookName}</h5>
      {loading && <Loading />}
      {!loading && (
        <div className="list-container">
          <ul className="pt-list-unstyled heading">
            <li className="heading">
              <span className="index">#</span>
              <span className="total">Total ({quoteToken})</span>
              <span className="amount">Amount ({baseToken})</span>
              <span className="price" style={{ color: '#fff' }}>
                Price ({quoteToken})
              </span>
            </li>
          </ul>
          <ul className="pt-list-unstyled list">
            {[]
              .concat(orderList)
              .sort((a, b) => a.price <= b.price)
              .map((order, index) => <SingleOrder decimals={decimals} key={index} index={index} order={order} />)}
          </ul>
        </div>
      )}
    </div>
  );
};

const SingleOrder = (props: SingleOrderProps) => {
  const { order, index, decimals } = props;
  return (
    <li className="not-heading">
      <span className="index">{index + 1}</span>
      <span className="total">{reduceDecimals(order.amount * order.price, decimals)}</span>
      <span className="amount">{reduceDecimals(order.amount, decimals)}</span>
      <span className="price">{reduceDecimals(order.price, decimals)}</span>
    </li>
  );
};
