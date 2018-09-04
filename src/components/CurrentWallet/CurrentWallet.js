import React from 'react';
import CurrentWalletRenderer from './CurrentWalletRenderer';

// TODO: Need to add the types/Flow after finishing it following issues
// TODO: 1. Private Key 2. Balances from props

export default class CurrentWallet extends React.PureComponent {
  state = {
    showPrivateKey: false,
    isModalOpen: false,
    locked: false,
    balance: '121.2312',
  };

  togglePrivateKey = () => {
    this.setState(function(prevState) {
      return {
        showPrivateKey: !prevState.showPrivateKey,
      };
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
      props: { accountAddress, pvtKeyLocked, accountPrivateKey },
      state: { showPrivateKey, currentBlock, balance, locked, isModalOpen },
      togglePrivateKey,
      handleModalClose,
    } = this;
    return (
      <CurrentWalletRenderer
        showPrivateKey={showPrivateKey}
        privateKey={accountPrivateKey}
        balance={balance}
        locked={locked}
        isModalOpen={isModalOpen}
        currentBlock={currentBlock}
        pvtKeyLocked={pvtKeyLocked}
        accountAddress={accountAddress}
        togglePrivateKey={togglePrivateKey}
        handleModalClose={handleModalClose}
      />
    );
  }
}
