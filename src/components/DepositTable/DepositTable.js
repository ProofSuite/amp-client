// @flow
import React from 'react';
import styled from 'styled-components';
import DepositTableRenderer from './DepositTableRenderer';
import DepositModal from '../../components/DepositModal';
import SendEtherModal from '../../components/SendEtherModal';

import type { Token } from '../../types/tokens';

type Props = {
  provider: string,
  toggleAllowance: string => void,
  depositTableData: Array<Object>,
  redirectToTradingPage: string => void,
};

type State = {
  isDepositModalOpen: boolean,
  isSendModalOpen: boolean,
  selectedToken: ?Token,
  hideZeroBalanceToken: boolean,
  searchInput: string,
};

class DepositTable extends React.PureComponent<Props, State> {
  state = {
    isDepositModalOpen: false,
    isSendModalOpen: false,
    selectedToken: null,
    hideZeroBalanceToken: false,
    searchInput: '',
  };

  openDepositModal = (symbol: string) => {
    let selectedToken = this.props.depositTableData.filter(elem => elem.symbol === symbol)[0];

    this.setState({
      isDepositModalOpen: true,
      selectedToken: selectedToken,
    });
  };

  openSendModal = (symbol: string) => {
    let selectedToken = this.props.depositTableData.filter(elem => elem.symbol === symbol)[0];

    this.setState({
      isSendModalOpen: true,
      selectedToken: selectedToken,
    });
  };

  closeDepositModal = () => {
    this.setState({ isDepositModalOpen: false });
  };

  closeSendModal = () => {
    this.setState({ isSendModalOpen: false });
  };

  handleSearchInputChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchInput: e.target.value });
  };

  toggleZeroBalanceToken = () => {
    this.setState({ hideZeroBalanceToken: !this.state.hideZeroBalanceToken });
  };

  filterTokens = (data: Array<Object>) => {
    const { searchInput, hideZeroBalanceToken } = this.state;

    if (searchInput) data = data.filter(token => token.symbol.indexOf(searchInput.toUpperCase()) > -1);
    if (hideZeroBalanceToken) data = data.filter(token => token.balance !== '0');

    return data;
  };

  render() {
    let { provider, depositTableData, toggleAllowance, redirectToTradingPage } = this.props;
    let { isDepositModalOpen, isSendModalOpen, selectedToken, searchInput, hideZeroBalanceToken } = this.state;

    depositTableData = this.filterTokens(depositTableData);

    return (
      <Wrapper>
        <DepositTableRenderer
          provider={provider}
          depositTableData={depositTableData}
          searchInput={searchInput}
          hideZeroBalanceToken={hideZeroBalanceToken}
          openDepositModal={this.openDepositModal}
          openSendModal={this.openSendModal}
          toggleZeroBalanceToken={this.toggleZeroBalanceToken}
          handleSearchInputChange={this.handleSearchInputChange}
          toggleAllowance={toggleAllowance}
          redirectToTradingPage={redirectToTradingPage}
        />
        <DepositModal
          isOpen={isDepositModalOpen}
          handleClose={this.closeDepositModal}
          token={selectedToken}
          tokenData={depositTableData}
        />
        <SendEtherModal isOpen={isSendModalOpen} handleClose={this.closeSendModal} token={selectedToken} />
      </Wrapper>
    );
  }
}

export default DepositTable;

const Wrapper = styled.div`
  height: 100%;
`;
