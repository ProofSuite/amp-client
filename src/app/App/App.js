import React, { Component } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <FormattedMessage {...messages.title} />
          </h1>
        </header>
        <p className="App-intro">
          <FormattedMessage {...messages.introduction} values={{ code: <code>src/App.js</code> }} />
        </p>
      </div>
    );
  }
}

export default App;
