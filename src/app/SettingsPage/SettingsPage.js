import React from 'react';
import SettingsPageRenderer from './SettingsPageRenderer';
import { getLocalStorageWallets } from '../../utils/helpers';

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
      <SettingsPageRenderer
        pvtKeyLocked={pvtKeyLocked}
        wallets={wallets}
        togglePvtKeyLock={togglePvtKeyLock}
        removeWallet={this.removeWallet}
      />
    );
  }
}

export default SettingsPage;
