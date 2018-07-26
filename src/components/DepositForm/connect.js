// @flow
import { connect } from 'react-redux';
import getDepositFormModel from '../../store/models/depositForm';

import {
  subscribeBalance,
  queryBalances,
  confirmEtherDeposit,
  confirmTokenDeposit,
} from '../../store/models/depositForm';

import type { State, Dispatch } from '../../types';

export const mapStateToProps = (state: State) => {
  const depositFormModel = getDepositFormModel(state);

  return {
    address: depositFormModel.accountAddress(),
    tokens: depositFormModel.rankedTokens(),
    balances: depositFormModel.balances(),
    step: depositFormModel.getStep(),
    convertTx: depositFormModel.getConvertTxState(),
    allowTx: depositFormModel.getAllowTxState(),
  };
};

export const mapDispatchToProps = {
  subscribeBalance,
  queryBalances,
  confirmEtherDeposit,
  confirmTokenDeposit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
