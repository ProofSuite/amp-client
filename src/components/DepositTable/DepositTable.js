import React from 'react';
import DepositTableRenderer from './DepositTableRenderer';

type Props = {
  depositData: Array<Object>,
};

class DepositTable extends React.PureComponent<Props, State> {
  handleAllowance = () => {
    console.log('Log allowance');
  };

  handleDeposit = () => {
    console.log('Log deposit');
  };

  handleWithdraw = () => {
    console.log('Log Withdraw');
  };

  render() {
    const { depositData } = this.props;

    return (
      <DepositTableRenderer
        depositData={depositData}
        handleAllowance={this.handleAllowance}
        handleDeposit={this.handleDeposit}
        handleWithdraw={this.handleWithdraw}
      />
    );
  }
}

export default DepositTable;
