import React from 'react';
import Modal from '../Modal';
//TODO: Need to add types/Flow after solving types of Parent Component (Current Wallet)
const StartTxModal = props => {
  return <Modal title="Send Transaction" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose} />;
};
export default StartTxModal;
