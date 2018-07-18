import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import WalletPage from './WalletPage';
import ExchangePage from './ExchangePage';
import SettingsPage from './SettingsPage';
import LogoutPage from './LogoutPage';
import TestApisPage from './App/App';

import '../styles/css/app.css';

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/wallet" component={WalletPage} />
        <Route path="/exchange" component={ExchangePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/testApis" component={TestApisPage} />
      </Switch>
    </Layout>
  );
}

export function bootstrap(store, container) {
  const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  ReactDOM.render(app, container);
}

export default App;
