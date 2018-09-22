// @flow
import React from 'react';
import WalletPageRenderer from './WalletPageRenderer';
import { Redirect } from 'react-router-dom';

import type { TokenData } from '../../types/tokens';

type Props = {
  loading: boolean,
  provider: string,
  pvtKeyLocked: boolean,
  accountAddress: string,
  accountPrivateKey: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  authenticated: boolean,
  queryAccountData: void => void,
  depositTableData: Array<TokenData>,
  redirectToTradingPage: string => void,
  toggleAllowance: string => void,
};

class WalletPage extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.queryAccountData();
    }
  }

  render() {
    const {
      loading,
      provider,
      pvtKeyLocked,
      depositTableData,
      authenticated,
      accountAddress,
      accountPrivateKey,
      etherBalance,
      gasPrice,
      gas,
      toggleAllowance,
      redirectToTradingPage,
    } = this.props;

    if (!authenticated) return <Redirect to="/login" />;

    return (
      <WalletPageRenderer
        loading={loading}
        etherBalance={etherBalance}
        gasPrice={gasPrice}
        gas={gas}
        accountPrivateKey={accountPrivateKey}
        provider={provider}
        pvtKeyLocked={pvtKeyLocked}
        accountAddress={accountAddress}
        depositTableData={depositTableData}
        toggleAllowance={toggleAllowance}
        redirectToTradingPage={redirectToTradingPage}
      />
    );
  }
}

export default WalletPage;
