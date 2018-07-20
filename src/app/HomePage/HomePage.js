// @flow
import React from 'react';
import styled from 'styled-components';
import type { LoadDataParams } from '../../types/homePage';

type Props = {
  loadData: (params: LoadDataParams) => void,
};

export default class HomePage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.loadData({ tokenId: 'token_id' });
  }
  render() {
    return <Row />;
  }
}
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
