import React from 'react';
import WalletPageRenderer from './WalletPageRenderer';

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
    const { loading, depositTableData } = this.props;

    return <WalletPageRenderer loading={loading} depositTableData={depositTableData} />;
  }
}

export default WalletPage;
