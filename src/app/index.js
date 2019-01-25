import './env'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './Layout'
import LoginPage from './LoginPage'
import FaqPage from './FaqPage';
import WalletPage from './WalletPage'
import SettingsPage from './SettingsPage'
import LogoutPage from './LogoutPage'
import TradingPage from './TradingPage'
import MarketsPage from './MarketsPage'

import { connect } from 'react-redux';

import SocketController from '../components/SocketController'
import { ConnectedRouter } from 'connected-react-router'

import history from '../store/history'


import '../styles/css/index.css'
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'

// /node_modules/
// 


const App = () => {
  return (
      <ConnectedRouter history={history}>
        <SocketController>
          <Layout>
            <Switch>
              <Route path="/faq" component={FaqPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/markets" component={MarketsPage} />
              <Route path="/wallet" component={WalletPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/trade" component={TradingPage} />
              <Redirect to="/login" />
            </Switch>
          </Layout>
        </SocketController>
      </ConnectedRouter>

  )
}

export default connect((state) => {
  return {
    location: state.router.location.pathname
  }
})(App)
