import React from 'react';
import WalletPageRenderer from './WalletPageRenderer';
import { Redirect } from 'react-router-dom';

type Props = {
  loading: boolean,
  queryAccountData: void => void,
  depositTableData: Array<Object>,
};

class WalletPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.queryAccountData();
  }
  render() {
    const { loading, depositTableData, authenticated } = this.props;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return <WalletPageRenderer loading={loading} depositTableData={depositTableData} />;
  }
}

export default WalletPage;
