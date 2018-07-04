import React from 'react';
import { IntlProvider } from 'react-intl';
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
        <App />
      </IntlProvider>
    );
  }
}

AppContainer.defaultProps = {
  locale: 'en',
  messages: {},
};

export default AppContainer;
