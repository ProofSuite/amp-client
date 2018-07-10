// @flow
import React from 'react';
import { Dialog } from '@blueprintjs/core';
import type { Node } from 'react';

type Props = {
  title: string,
  icon: string,
  isOpen: boolean,
  onClose: (SyntheticInputEvent<>) => void,
  children: Node,
};

const Modal = (props: Props): Node => {
  return (
    <Dialog
      title={props.title}
      icon={props.icon}
      isOpen={props.isOpen}
      usePortal={false}
      onClose={props.onClose}
      style={{ width: '800px' }}
      className="pt-dark"
      canOutsideClickClose={false}
    >
      <div className="pt-dialog-body">{props.children}</div>
    </Dialog>
  );
};

export default Modal;
