// @flow
import React from 'react';
import Modal from '../Modal';
import ConvertTokensFormContainer from '../ConvertTokensForm'

import type { Token } from '../../types/tokens'

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  fromToken: Token,
  toToken: Token
};

const ConvertTokensFormModal = (props: Props) => {
  return (
    <Modal title="Deposit Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
      <ConvertTokensFormContainer fromToken={props.fromToken} toToken={props.toToken} />
    </Modal>
  );
};

export default ConvertTokensFormModal;