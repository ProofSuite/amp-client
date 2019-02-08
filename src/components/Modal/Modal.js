// @flow
import type { Node } from 'react';
import React from 'react';
import { Dialog } from '@blueprintjs/core';

type Props = {
  title: string,
  icon: string,
  isOpen: boolean,
  onClose: (SyntheticInputEvent<>) => void,
  children: Node,
};

const Modal = (props: Props): Node => {
  const width = props.width || '800px'

  return (
    <Dialog
      title={props.title}
      icon={props.icon}
      isOpen={props.isOpen}
      onClose={props.onClose}
      style={{ width }}
      className="bp3-dark"
      canOutsideClickClose={false}
    >
      <div>{props.children}</div>
    </Dialog>
  );
};

export default Modal;
