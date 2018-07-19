import React from 'react';
import { Redirect } from 'react-router-dom';
import { NonIdealState, Spinner } from '@blueprintjs/core';

class LogoutPage extends React.PureComponent {
  componentDidMount() {
    //this.props.logout();
  }

  render() {
    const { isDefaultAccountSet } = this;

    if (!isDefaultAccountSet) {
      return <Redirect to="/" />;
    }

    return (
      <NonIdealState title="Cleaning up your data..." visual={<Spinner intent="primary" large />}>
        Please wait for a moment.
      </NonIdealState>
    );
  }
}

export default LogoutPage;
