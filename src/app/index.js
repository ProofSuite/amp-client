import './env'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import WalletPage from './WalletPage'
import ExchangePage from './ExchangePage'
import SettingsPage from './SettingsPage'
import LogoutPage from './LogoutPage'
import TradingPage from './TradingPage'

import SocketManager from '../components/SocketManager'
import { ConnectedRouter } from 'connected-react-router'

import '../styles/css/index.css'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <SocketManager>
        <Layout>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/wallet" component={WalletPage} />
            <Route path="/exchange" component={ExchangePage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/logout" component={LogoutPage} />
            <Route path="/trade" component={TradingPage} />
          </Switch>
        </Layout>
      </SocketManager>
    </ConnectedRouter>
  )
}

export default App
