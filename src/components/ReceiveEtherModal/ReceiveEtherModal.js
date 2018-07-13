// @flow
import React from 'react';
import Modal from '../Modal';
import ReceiveEtherFormContainer from '../ReceiveEtherForm';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  step: 'waiting' | 'convert',
  balance: ?number,
  address: string,
  tokens: Array<Object>,
  token: Object,
};

const ReceiveEtherModal = (props: Props) => {
  return (
    <Modal title="Send Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
      <ReceiveEtherFormContainer
        step={props.step}
        balance={props.balance}
        address={props.address}
        tokens={props.tokens}
        token={props.token}
      />
    </Modal>
  );
};

export default ReceiveEtherModal;
