import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export function bootstrap(container) {
  const app = <App />;

  ReactDOM.render(app, container);
}
