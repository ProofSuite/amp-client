// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';

type Props = {
  authenticated: boolean,
  loginWithMetamask: () => void,
  loginWithWallet: (SyntheticEvent<>) => void,
  removeNotification: any => void,
};

//TODO: Remove Notification handling

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

  showLoginMethods = () => {
    this.setState({ view: 'loginMethods' });
  };

  showCreateWallet = () => {
    this.setState({ view: 'createWallet' });
  };

  loginWithMetamask = () => {
    this.props.loginWithMetamask();
  };

  hideModal = () => {
    this.setState({ view: 'loginMethods' });
  };

  componentWillMount = () => {
    // this.props.removeNotification({ id: 1 });
  };

  walletCreated = props => {
    console.log(props);
    // this.props.removeNotification({ id: 1 });
  };

  render() {
    const {
      props: { loginWithMetamask, loginWithWallet, authenticated },
      state: { view, metamaskStatus },
      showWalletLoginForm,
      showLoginMethods,
      showCreateWallet,
      hideModal,
      walletCreated,
    } = this;

    if (authenticated) {
      return <Redirect to="/wallet" />;
    }
    return (
      <div>
        <LoginPageRenderer
          view={view}
          metamaskStatus={metamaskStatus}
          loginWithWallet={loginWithWallet}
          showCreateWallet={showCreateWallet}
          hideModal={hideModal}
          walletCreated={walletCreated}
          loginWithMetamask={loginWithMetamask}
          showWalletLoginForm={showWalletLoginForm}
          showLoginMethods={showLoginMethods}
        />
      </div>
    );
  }
}

export default LoginPage;
