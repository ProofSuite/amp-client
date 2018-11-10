// @flow

import React from 'react';
import { getLocalStorageWallets } from '../../store/services/storage';
import WalletSettingsForm from '../../components/WalletSettingsForm/index.js';
import SignerSettingsForm from '../../components/SignerSettingsForm/index.js';
import { Box } from '../../components/Common';

import type { Wallet } from '../../types/wallets'
import type { Address } from '../../types/common'

type Props = {}

type State = {
  wallets: Array<Wallet>
}

class SettingsPage extends React.PureComponent<Props, State> {
  state = {
    wallets: getLocalStorageWallets()
  };

  removeWallet = (address: Address) => {
    localStorage.removeItem(address);
    this.setState({ wallets: getLocalStorageWallets() });
  };

  render() {
    const { wallets } = this.state;

    return (
      <React.Fragment>
        <Box width={500} m={3}>
          <WalletSettingsForm wallets={wallets} removeWallet={this.removeWallet} />
        </Box>
        <Box width={500} m={3}>
          <SignerSettingsForm />
        </Box>
      </React.Fragment>
    );
  }
}

export default SettingsPage;
