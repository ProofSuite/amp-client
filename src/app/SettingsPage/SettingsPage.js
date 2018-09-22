import React from 'react';
import { getLocalStorageWallets } from '../../utils/helpers';
import WalletSettingsForm from '../../components/WalletSettingsForm/index.js';
import SignerSettingsForm from '../../components/SignerSettingsForm/index.js';
import { Box } from '../../components/Common';

class SettingsPage extends React.PureComponent {
  state = {
    wallets: getLocalStorageWallets(),
  };

  removeWallet = address => {
    localStorage.removeItem(address);
    this.setState({ wallets: getLocalStorageWallets() });
  };

  render() {
    const { pvtKeyLocked, togglePvtKeyLock } = this.props;
    const { wallets } = this.state;

    return (
      <React.Fragment>
        <Box width={500} m={3}>
          <WalletSettingsForm
            pvtKeyLocked={pvtKeyLocked}
            wallets={wallets}
            togglePvtKeyLock={togglePvtKeyLock}
            removeWallet={this.removeWallet}
          />
        </Box>
        <Box width={500} m={3}>
          <SignerSettingsForm />
        </Box>
      </React.Fragment>
    );
  }
}

export default SettingsPage;
