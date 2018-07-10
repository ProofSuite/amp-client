import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import PortfolioPage from './PortfolioPage';
import WalletPage from './WalletPage';
import ExchangePage from './ExchangePage';
import SettingPage from './SettingPage';
import LogoutPage from './LogoutPage';
import './index.css';

export function bootstrap(store, container) {
  const app = (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/wallet" component={WalletPage} />
            <Route path="/exchange" component={ExchangePage} />
            <Route path="/setting" component={SettingPage} />
            <Route path="/logout" component={LogoutPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );

  ReactDOM.render(app, container);
}
