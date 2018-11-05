// @flow
import { connect } from 'react-redux';
import getTransferTokensFormSelector, {
  sendEtherTx,
  sendTransferTokensTx,
  validateEtherTx,
  validateTransferTokensTx,
} from '../../store/models/transferTokensForm';

import type { State } from '../../types';
import type { Token } from '../../types/tokens';

type Props = {
  token: Token,
};

export const mapStateToProps = (state: State, ownProps: Props) => {
  const transferTokensFormSelector = getTransferTokensFormSelector(state);

  return {
    token: ownProps.token,
    loading: transferTokensFormSelector.isLoading(),
    status: transferTokensFormSelector.getStatus(),
    statusMessage: transferTokensFormSelector.getStatusMessage(),
    gas: transferTokensFormSelector.getGas(),
    gasPrice: transferTokensFormSelector.getGasPrice(),
    hash: transferTokensFormSelector.getHash(),
    receipt: transferTokensFormSelector.getReceipt(),
    tokens: transferTokensFormSelector.tokens(),
  };
};

export const mapDispatchToProps = {
  validateEtherTx,
  sendEtherTx,
  validateTransferTokensTx,
  sendTransferTokensTx,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
