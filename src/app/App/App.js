import React, { Component } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import OHLCV from '../../components/OHLCV';
import OrderBook from '../../components/OrderBook';
import HomePage from '../../components/HomePage';

class TestApisPage extends Component {
  state = {
    ohlcvData: [{ data: '' }],
  };

  render() {
    const { ohlcvData } = this.state;
    return (
      <React.Fragment>
        <OHLCV />
        <OrderBook />
        <HomePage />
      </React.Fragment>
    );
  }
}

export default TestApisPage;

const AppDiv = () => (
  <div className="App">
    <header className="App-header">
      <img className="App-logo" alt="logo" />
      <h1 className="App-title">
        <FormattedMessage {...messages.title} />
      </h1>
    </header>
    <p className="App-intro">
      <FormattedMessage {...messages.introduction} values={{ code: <code>src/App.js</code> }} />
    </p>
  </div>
);

const messages = defineMessages({
  title: {
    id: 'app.title',
    description: 'Title of the Application',
    defaultMessage: 'Welcome to React',
  },
  introduction: {
    id: 'app.introduction',
    description: 'Description of the Application',
    defaultMessage: 'To get started, edit {code} and save to reload.',
  },
});
