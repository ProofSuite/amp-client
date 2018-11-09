// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';
import { createWalletFromJSON } from '../../store/services/wallet';
import type { LoginWithWallet } from '../../types/loginPage';

type Props = {
  authenticated: boolean,
  loginWithMetamask: () => void,
  loginWithWallet: LoginWithWallet => void,
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

  walletCreated = async (props: Object) => {
    console.log('beginning wallet created')
    const { password, encryptedWallet, storeWallet, storePrivateKey } = props;
    var { wallet } = await createWalletFromJSON(encryptedWallet, password);

    console.log('in wallet created')

    if (wallet) this.props.loginWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
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
