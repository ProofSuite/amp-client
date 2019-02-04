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
  const title = (props.fromToken === "ETH") ? "Deposit" : "Withdraw"

  return (
    <Modal
      title={title}
      icon="info-sign"
      isOpen={props.isOpen}
      onClose={props.handleClose}
      width={600}
    >
      <ConvertTokensFormContainer
        fromToken={props.fromToken} 
        toToken={props.toToken}
      />
    </Modal>
  );
};

export default ConvertTokensFormModal;