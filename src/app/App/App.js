import React, { Component } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
// import logo from './logo.svg';
// import './App.css';
import OHLCVRenderer from '../../components/OHLCV';

class TestApisPage extends Component {

  state = {
    ohlcvData: [],
  }

  render() {
    const {ohlcvData} = this.state;

    return (
      <OHLCVRenderer ohlcvData={ohlcvData}/>
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

