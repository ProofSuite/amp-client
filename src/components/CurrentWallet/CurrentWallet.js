import React from 'react';
import CurrentWalletRenderer from './CurrentWalletRenderer';

// TODO: Need to add the types/Flow after finishing it following issues
// TODO: 1. Private Key 2. Balances from props

export default class CurrentWallet extends React.PureComponent {
  state = {
    showPrivateKey: false,
    isModalOpen: false,
    locked: false,
    showEth: true,
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
  toggleBalance = () => {
    this.setState(function(prevState) {
      return {
        showEth: !prevState.showEth,
      };
    });
  };

  render() {
    const {
      props: { accountAddress, gasPrice, gas, pvtKeyLocked, accountPrivateKey, etherBalance },
      state: { showPrivateKey, showEth, currentBlock, locked, isModalOpen },
      togglePrivateKey,
      handleModalClose,
      toggleBalance,
    } = this;
    return (
      <CurrentWalletRenderer
        showPrivateKey={showPrivateKey}
        privateKey={accountPrivateKey}
        showEth={showEth}
        gasPrice={gasPrice}
        gas={gas}
        balance={etherBalance}
        locked={locked}
        isModalOpen={isModalOpen}
        currentBlock={currentBlock}
        pvtKeyLocked={pvtKeyLocked}
        accountAddress={accountAddress}
        toggleBalance={toggleBalance}
        togglePrivateKey={togglePrivateKey}
        handleModalClose={handleModalClose}
      />
    );
  }
}
