import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

type Props = {
  /**
   * Locale of the UI
   */
  locale?: string,

  /**
   * Message Descriptor Map of the current locale
   */
  messages?: object,
};
class AppContainer extends React.PureComponent<Props> {
  render() {
    const {
      props: { locale, messages },
    } = this;

    return (
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

AppContainer.defaultProps = {
  locale: 'en',
  messages: {},
};

export default AppContainer;
