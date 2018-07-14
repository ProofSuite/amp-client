// @flow
import React from 'react';
import { OrderBook } from './OrderBook';
import styled from 'styled-components';
// import type { OrderBookRendererProps } from '../../types/orderBook';

type Props = {
  loading: boolean,
  decimals: number,
  sellOrderList: Array<Object>,
  buyOrderList: Array<Object>,
  quoteToken: string,
  baseToken: string,
};

export default class OrderBookRenderer extends React.PureComponent<Props> {
  static defaultProps = {
    decimals: 2,
  };
  render() {
    const { buyOrderList, sellOrderList, loading, baseToken, quoteToken, decimals } = this.props;
    return (
      <Row>
        <OrderBook
          orderList={sellOrderList}
          bookName="Sell"
          loading={loading}
          baseToken={baseToken}
          quoteToken={quoteToken}
          decimals={decimals}
        />
        <OrderBook
          orderList={buyOrderList}
          bookName="Buy"
          loading={loading}
          baseToken={baseToken}
          quoteToken={quoteToken}
          decimals={decimals}
        />
      </Row>
    );
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
