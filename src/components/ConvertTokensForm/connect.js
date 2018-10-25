// @flow
import { connect } from 'react-redux';
import getConvertTokensFormSelector, {
  convertFromETHtoWETH,
  convertFromWETHtoETH,
 } from '../../store/models/convertTokensForm';

import type { State } from '../../types';

export const mapStateToProps = (state: State, ownProps: Object) => {
  const convertTokensFormSelector = getConvertTokensFormSelector(state);
  const { fromToken, toToken } = ownProps
  const tokens = convertTokensFormSelector.tokens()
  const balances = convertTokensFormSelector.balances()
  const convertTokensFormState = convertTokensFormSelector.convertTokensFormState(fromToken)

  return {
    token: tokens[fromToken],
    fromTokenBalance: balances[fromToken].balance,
    toTokenBalance: balances[toToken].balance,
    address: convertTokensFormSelector.accountAddress(),
    ...convertTokensFormState
  };
};

const mapDispatchToProps = {
  convertFromWETHtoETH,
  convertFromETHtoWETH
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
