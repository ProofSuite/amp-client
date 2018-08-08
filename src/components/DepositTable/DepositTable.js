import React from 'react';
import DepositTableRenderer from './DepositTableRenderer';
import DepositModal from '../../components/DepositModal';

type Props = {
  depositData: Array<Object>,
};

class DepositTable extends React.PureComponent<Props, State> {
  state = {
    isModalOpen: false,
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

  render() {
    const { depositData } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <DepositTableRenderer
          depositData={depositData}
          handleModalClose={this.handleModalClose}
          handleAllowance={this.handleAllowance}
          handleDeposit={this.handleDeposit}
          handleWithdraw={this.handleWithdraw}
        />
        <DepositModal isOpen={isModalOpen} handleClose={this.handleModalClose} />
      </div>
    );
  }
}

export default DepositTable;
