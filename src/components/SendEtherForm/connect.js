// @flow
import { connect } from 'react-redux';
import etherTxModel, {
  sendEtherTx,
  sendTransferTokensTx,
  validateEtherTx,
  validateTransferTokensTx,
} from '../../store/models/etherTx';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return etherTxModel(state).getState();
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
