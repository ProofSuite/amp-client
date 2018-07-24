// @flow
import React from 'react';
import Loading from '../Loading';
import { round } from '../../utils/converters';
import type { OrderListTypes, SingleOrderTypes } from '../../types/orderBook';

type ListTypes = OrderListTypes;
type SingleOrderProps = SingleOrderTypes;

export const OrderBookRenderer = (props: ListTypes) => {
  const { bookName, quoteToken, baseToken, decimals, orderList } = props;
  return (
    <div className={bookName + ' order-book inner pt-dark'}>
      <h5>{bookName}</h5>
      {orderList.length < 1 && <Loading />}
      {orderList.length > 0 && (
        <div className="list-container">
          <ul className="pt-list-unstyled heading">
            <li className="heading">
              <span className="index">#</span>
              <span className="total">Total ({quoteToken})</span>
              <span className="amount">Amount ({baseToken})</span>
              <span className="price">Price ({quoteToken})</span>
            </li>
          </ul>
          <ul className="pt-list-unstyled list">
            {orderList.map((order, index) => (
              <SingleOrder decimals={decimals} key={index} index={index} order={order} />
            ))}
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
      <span className="total">{round(order.amount * order.price, decimals)}</span>
      <span className="amount">{round(order.amount, decimals)}</span>
      <span className="price">{round(order.price, decimals)}</span>
    </li>
  );
};
