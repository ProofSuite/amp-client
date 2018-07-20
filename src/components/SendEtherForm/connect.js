// @flow
import { connect } from 'react-redux';
import etherTxModel, {
  validateEtherTx,
  sendEtherTx,
  validateTransferTokensTx,
  sendTransferTokensTx,
} from '../../store/models/etherTx';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  console.log('etherTx state:- ', state);
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
