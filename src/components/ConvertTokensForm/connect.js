// @flow
import { connect } from 'react-redux';
import getConvertTokensFormSelector, {
  confirmEtherDeposit,
  confirmTokenDeposit,
} from '../../store/models/convertTokensForm';

import type { State } from '../../types';

export const mapStateToProps = (state: State, ownProps: Object) => {
  const convertTokensFormSelector = getConvertTokensFormSelector(state);

  const { tokenSymbol } = ownProps
  const tokens = convertTokensFormSelector.tokens()
  const balances = convertTokensFormSelector.balances()
  const convertTokensFormState = convertTokensFormSelector.convertTokensFormState(tokenSymbol)

  return {
    token: tokens[tokenSymbol],
    balance: balances[tokenSymbol],
    address: convertTokensFormSelector.accountAddress(),
    ...convertTokensFormState
  };
};

export const mapDispatchToProps = {
  confirmEtherDeposit,
  confirmTokenDeposit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
