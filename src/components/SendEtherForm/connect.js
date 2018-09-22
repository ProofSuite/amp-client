// @flow
import { connect } from 'react-redux';
import getSendEtherFormSelector, {
  sendEtherTx,
  sendTransferTokensTx,
  validateEtherTx,
  validateTransferTokensTx,
} from '../../store/models/sendEtherForm';

import type { State } from '../../types';
import type { Token } from '../../types/tokens';

type Props = {
  token: Token,
};

export const mapStateToProps = (state: State, ownProps: Props) => {
  const sendEtherFormSelector = getSendEtherFormSelector(state);

  return {
    token: ownProps.token,
    loading: sendEtherFormSelector.isLoading(),
    status: sendEtherFormSelector.getStatus(),
    statusMessage: sendEtherFormSelector.getStatusMessage(),
    gas: sendEtherFormSelector.getGas(),
    gasPrice: sendEtherFormSelector.getGasPrice(),
    hash: sendEtherFormSelector.getHash(),
    receipt: sendEtherFormSelector.getReceipt(),
    tokens: sendEtherFormSelector.tokens(),
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
