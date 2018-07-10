import React from 'react';
import { Button } from '@blueprintjs/core';

class ModalBox extends React.PureComponent<> {
  state = {
    isOpen: false,
  };

  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <Button intent="primary" onClick={this.handleOpen} text="Click to open modal" />
        {this.props.children({
          handleClose: this.handleClose,
          isOpen: isOpen,
        })}
      </React.Fragment>
    );
  }
}

export default ModalBox;
