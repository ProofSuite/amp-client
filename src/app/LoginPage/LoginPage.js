// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';

type Props = {
  authenticated: boolean,
  connectWithMetamask: (SyntheticEvent<>) => void,
  connectWithWallet: (SyntheticEvent<>) => void,
};

type State = {
  view: string,
  metamaskStatus: 'unlocked' | 'locked' | 'undefined',
};

class LoginPage extends React.PureComponent<Props, State> {
  state = {
    view: 'loginMethods',
    metamaskStatus: 'undefined',
  };

  componentDidMount = () => {
    typeof window.web3 === 'undefined'
      ? this.setState({ metamaskStatus: 'undefined' })
      : typeof window.web3.eth.defaultAccount === 'undefined'
        ? this.setState({ metamaskStatus: 'locked' })
        : this.setState({ metamaskStatus: 'unlocked' });
  };

  showWalletLoginForm = () => {
    this.setState({ view: 'wallet' });
  };

  render() {
    const { connectWithMetamask, connectWithWallet, authenticated } = this.props;
    const { view, metamaskStatus } = this.state;

    if (authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <LoginPageRenderer
        view={view}
        metamaskStatus={metamaskStatus}
        connectWithWallet={connectWithWallet}
        connectWithMetamask={connectWithMetamask}
        showWalletLoginForm={this.showWalletLoginForm}
      />
    );
  }
}

export default LoginPage;
