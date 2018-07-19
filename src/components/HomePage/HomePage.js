// @flow
import React from 'react';
import styled from 'styled-components';
import type { LoadDataParams } from '../../types/homePage';

type Props = {
  loading: boolean,
  decimals: number,
  quoteToken: string,
  baseToken: string,
  sellOrderList: Array<Object>,
  buyOrderList: Array<Object>,
  ohlcvData: Array<Object>,
  orderHistory: Array<Object>,
  tradeHistory: Array<Object>,
  loadData: LoadDataParams => void,
};

export default class HomePage extends React.PureComponent<Props> {
  static defaultProps = {
    decimals: 2,
  };
  componentDidMount() {
    this.props.loadData({ tokenId: 'token_id' });
  }
  render() {
    const { buyOrderList, sellOrderList, loading, baseToken, quoteToken, decimals } = this.props;
    return <Row />;
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
