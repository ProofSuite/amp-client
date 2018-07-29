import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';
import { addNotification } from '../../store/actions/app';

class ClickBox extends React.PureComponent<> {
  render() {
    return (
      <Button
        intent="primary"
        onClick={() => this.props.addNotification({ id: 1, message: 'Heelo' })}
        text="Click to dispatch notification"
      />
    );
  }
}

export const mapDispatchToProps = {
  addNotification,
};

export default connect(
  null,
  mapDispatchToProps
)(ClickBox);
