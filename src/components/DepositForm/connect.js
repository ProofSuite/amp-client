// @flow
import { connect } from 'react-redux';

import getTokenModel from '../../store/models/tokens';
import getAccountModel from '../../store/models/account';
import getAccountBalancesModel from '../../store/models/accountBalances';
import getDepositFormModel from '../../store/models/depositForm';

import {
  subscribeBalance,
  queryBalances,
  confirmEtherDeposit,
  confirmTokenDeposit,
} from '../../store/models/depositForm';

import type { State, Dispatch } from '../../types';

export const mapStateToProps = (state: State) => {
  const tokenModel = getTokenModel(state);
  const accountModel = getAccountModel(state);
  const accountBalancesModel = getAccountBalancesModel(state);
  const depositFormModel = getDepositFormModel(state);

  return {
    step: depositFormModel.step(),
    balances: accountBalancesModel.balances(),
    address: accountModel.address(),
    tokens: tokenModel.rankedTokens(),
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
