// @flow
import { connect } from 'react-redux';
import etherTxModel, { validateEtherTx, sendEtherTx } from '../../store/models/etherTx';
import { validateTransferTokensTx, sendTransferTokensTx } from '../../store/models/etherTokensTx';

const mapStateToProps = state => {
  return etherTxModel(state).getState();
};

const mapDispatchToProps = {
  validateEtherTx,
  sendEtherTx,
  validateTransferTokensTx,
  sendTransferTokensTx,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
