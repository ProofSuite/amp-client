import React from 'react';
import styled from 'styled-components';
import DepositTableRenderer from './DepositTableRenderer';
import DepositModal from '../../components/DepositModal';

type Props = {
  depositData: Array<Object>,
};

class DepositTable extends React.PureComponent<Props, State> {
  state = {
    isModalOpen: false,
    searchValue: '',
  };
  handleAllowance = () => {
    console.log('Log allowance');
  };

  handleDeposit = () => {
    console.log('Log deposit');
  };

  handleWithdraw = () => {
    console.log('Log Withdraw');
  };

  handleModalClose = () => {
    this.setState(function(prevState) {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  handleSearchChange = (evt: SyntheticEvent<>) => {
    this.setState({ searchValue: evt.target.value });
  };

  filterData = data => {
    const { searchValue } = this.state;
    if (searchValue) {
      data = data.filter(token => {
        return token.symbol.indexOf(searchValue.toUpperCase()) > -1;
      });
    }
    return data;
  };

  render() {
    const { depositData } = this.props;
    const { isModalOpen, searchValue } = this.state;

    return (
      <Wrapper>
        <DepositTableRenderer
          depositData={this.filterData(depositData)}
          searchValue={searchValue}
          handleModalClose={this.handleModalClose}
          handleAllowance={this.handleAllowance}
          handleDeposit={this.handleDeposit}
          handleWithdraw={this.handleWithdraw}
          handleSearchChange={this.handleSearchChange}
        />
        <DepositModal isOpen={isModalOpen} handleClose={this.handleModalClose} />
      </Wrapper>
    );
  }
}

export default DepositTable;

const Wrapper = styled.div`
  height: 100%;
`;
