import React from 'react';
import CurrentWalletRenderer from './CurrentWalletRenderer';

// TODO: Need to add the types/Flow after finishing it following issues
// TODO: 1. Private Key 2. Balances from props

export default class CurrentWallet extends React.PureComponent {
  state = {
    showPrivateKey: false,
    isModalOpen: false,
    locked: false,
    privateKey: '0xssdfs232231sdhasjdhkasjhdkasjhkajsks384723h3hr338e2',
    balance: '121.2312',
  };

  togglePrivateKey = () => {
    this.setState(function(prevState) {
      if (prevState.locked) {
        return {
          showPrivateKey: !prevState.showPrivateKey,
        };
      }
    });
  };

  toggleLock = () => {
    this.setState(function(prevState) {
      if (!prevState.locked) {
        return {
          locked: !prevState.locked,
        };
      } else {
        return {
          showPrivateKey: false,
          locked: !prevState.locked,
        };
      }
    });
  };

  handleModalClose = () => {
    this.setState(function(prevState) {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  render() {
    const {
      props: { accountAddress },
      state: { showPrivateKey, privateKey, balance, locked, isModalOpen },
      togglePrivateKey,
      toggleLock,
      startTransaction,
      handleModalClose,
    } = this;
    return (
      <CurrentWalletRenderer
        showPrivateKey={showPrivateKey}
        privateKey={privateKey}
        balance={balance}
        locked={locked}
        isModalOpen={isModalOpen}
        accountAddress={accountAddress}
        togglePrivateKey={togglePrivateKey}
        toggleLock={toggleLock}
        handleModalClose={handleModalClose}
      />
    );
  }
}
