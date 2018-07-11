// @flow
import React from 'react';
import Modal from './Modal';
import { Button } from '@blueprintjs/core';

type State = {
  isOpen: boolean,
};

type Props = {
  title: string,
  icon: string,
};

class ModalStory extends React.PureComponent<Props, State> {
  state = {
    isOpen: false,
  };

  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <div>
        <Button intent="primary" onClick={this.handleOpen} text="Click to open modal" />
        <Modal isOpen={this.state.isOpen} onClose={this.handleClose} title={this.props.title} icon={this.props.icon}>
          <p>Modal Content</p>
        </Modal>
      </div>
    );
  }
}

export default ModalStory;
