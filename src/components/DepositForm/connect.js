// @flow
import { connect } from 'react-redux';
import getDepositFormModel, {
  confirmEtherDeposit,
  confirmTokenDeposit,
  queryBalances,
  subscribeBalance,
} from '../../store/models/depositForm';

import type { State } from '../../types';

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
