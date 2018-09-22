// @flow
import { connect } from 'react-redux';
import getDepositFormSelector, {
  confirmEtherDeposit,
  confirmTokenDeposit,
  queryBalances,
  subscribeBalance,
} from '../../store/models/depositForm';

import type { State } from '../../types';

export const mapStateToProps = (state: State, ownProps: Object) => {
  const depositFormSelector = getDepositFormSelector(state);

  return {
    token: ownProps.token,
    tokens: depositFormSelector.rankedTokens(),
    balances: depositFormSelector.balances(),
    address: depositFormSelector.accountAddress(),
    step: depositFormSelector.getStep(),
    convertTx: depositFormSelector.getConvertTxState(),
    allowTx: depositFormSelector.getAllowTxState(),
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
