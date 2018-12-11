// @flow
import React from 'react';
import WalletInfoRenderer from './WalletInfoRenderer';

type Props = {
  accountAddress: string,
  etherBalance: string,
  gasPrice: string,
  gas: string,
  handleDetectContract: SyntheticEvent<> => void,
}

type State = {
  isModalOpen: boolean,
  selectedTab: string,
  contractAddress: string
}

export default class WalletInfo extends React.PureComponent<Props, State> {
  state = { 
    isModalOpen: false,
    selectedTab: "Portfolio",
    contractAddress: ""
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  };

  handleChangeTab = (tab: string) => {
    this.setState({ selectedTab: tab })
  }

  handleChangeContractAddress = ({ target }: *) => {
    this.setState({ contractAddress: target.value })
  }

  render() {
    const {
      props: { 
        accountAddress, 
        gasPrice, 
        gas, 
        etherBalance,
        handleDetectContract,
      },
      state: { 
        isModalOpen,
        selectedTab,
        contractAddress,
      },
      handleModalClose,
      handleChangeTab,
      handleChangeContractAddress
    } = this;

    return (
      <WalletInfoRenderer
        gasPrice={gasPrice}
        gas={gas}
        balance={etherBalance}
        isModalOpen={isModalOpen}
        selectedTab={selectedTab}
        accountAddress={accountAddress}
        contractAddress={contractAddress}
        handleModalClose={handleModalClose}
        handleChangeTab={handleChangeTab}
        handleChangeContractAddress={handleChangeContractAddress}
        handleDetectContract={handleDetectContract}
      />
    );
  }
}
