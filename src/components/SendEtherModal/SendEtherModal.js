// @flow
import React from 'react';
import Modal from '../Modal';
import SendEtherFormContainer from '../SendEtherForm';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
};

const SendEtherModal = (props: Props) => (
  <Modal title="Send Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
    <SendEtherFormContainer />
  </Modal>
);

export default SendEtherModal;
