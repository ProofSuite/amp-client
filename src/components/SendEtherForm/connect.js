// @flow
import { connect } from 'react-redux';
import etherTxModel, { validateEtherTx, sendEtherTx } from '../../store/models/etherTx';
import { validateTransferTokensTx, sendTransferTokensTx } from '../../store/models/etherTokensTx';

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
