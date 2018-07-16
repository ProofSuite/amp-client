// @flow
import React from 'react';
import Modal from '../Modal';
import DepositFormContainer from '../DepositForm';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  step: 'waiting' | 'convert' | 'confirm',
  balance: ?number,
  address: string,
  tokens: Array<Object>,
  token: Object,
};

const DepositModal = (props: Props) => {
  return (
    <Modal title="Send Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
      <DepositFormContainer />
    </Modal>
  );
};

export default DepositModal;
