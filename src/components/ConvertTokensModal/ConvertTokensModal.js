// @flow
import React from 'react';
import Modal from '../Modal';
import ConvertTokensFormContainer from '../ConvertTokensForm'

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  step: 'convert' | 'confirm',
  balance: number,
  address: string,
  tokenData: Array<Object>,
  token: Object,
};

const ConvertTokensFormModal = (props: Props) => {
  return (
    <Modal title="Deposit Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
      <ConvertTokensFormContainer tokenData={props.tokenData} token={props.token} />
    </Modal>
  );
};

export default ConvertTokensFormModal;