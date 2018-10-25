import React from 'react';
import CurrentWalletRenderer from './CurrentWalletRenderer';

export default class CurrentWallet extends React.PureComponent {
  state = { isModalOpen: false };

  handleModalClose = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  };

  render() {
    const {
      props: { accountAddress, gasPrice, gas, etherBalance },
      state: { currentBlock, isModalOpen },
      handleModalClose,
      toggleBalance,
    } = this;

    return (
      <CurrentWalletRenderer
        gasPrice={gasPrice}
        gas={gas}
        balance={etherBalance}
        isModalOpen={isModalOpen}
        currentBlock={currentBlock}
        accountAddress={accountAddress}
        toggleBalance={toggleBalance}
        handleModalClose={handleModalClose}
      />
    );
  }
}
