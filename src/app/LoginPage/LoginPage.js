import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Callout } from '@blueprintjs/core';

class LoginPage extends React.PureComponent {
  render() {
    const {
      props: { connectMetamask, importWallet, isDefaultAccountSet },
    } = this;

    if (isDefaultAccountSet) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <Announcement>
          <Callout intent="warning">
            <FormattedMessage
              {...messages.announcement}
              values={{ link: <a href="https://proof-amp.com">https://proof-amp.com</a> }}
            />
          </Callout>
        </Announcement>
        <Notes>
          <Callout>
            <Reminder>
              <FormattedMessage {...messages.noPlugins} />
            </Reminder>
            <Reminder>
              <FormattedMessage {...messages.noPhoneCalls} />
            </Reminder>
            <Reminder>
              <FormattedMessage {...messages.noOfficialStaffs} />
            </Reminder>
            <Reminder>
              <FormattedMessage {...messages.noDisclosure} />
            </Reminder>
          </Callout>
        </Notes>
        <LoginMethods>
          <Provider onClick={connectMetamask}>
            <FormattedMessage
              {...messages.connect}
              values={{
                name: (
                  <h5>
                    <FormattedMessage {...messages.metamask} />
                  </h5>
                ),
              }}
            />
          </Provider>
          <Provider onClick={importWallet}>
            <FormattedMessage
              {...messages.import}
              values={{
                name: (
                  <h5>
                    <FormattedMessage {...messages.wallet} />
                  </h5>
                ),
              }}
            />
          </Provider>
        </LoginMethods>
      </Wrapper>
    );
  }
}

export default LoginPage;

const messages = defineMessages({
  announcement: {
    id: 'loginPage.announcement',
    defaultMessage: 'Make sure you are visiting {link} to prevent any phishing attacks',
  },
  noPlugins: {
    id: 'loginPage.noPlugins',
    defaultMessage: 'Never install any browser plug-ins that claim to be associated with Proofsuite',
  },
  noPhoneCalls: {
    id: 'loginPage.noPhoneCalls',
    defaultMessage: 'Never make any phone calls to anyone that claims to be a Proofsuite representative',
  },
  noOfficialStaffs: {
    id: 'loginPage.noOfficialStaffs',
    defaultMessage: 'Never make transactions or send funds to anyone who claims to be a member of Proofsuite support',
  },
  noDisclosure: {
    id: 'loginPage.noDisclosure',
    defaultMessage:
      'Never disclose your password, private keys or other authentication elements to anyone, including Proofsuite support',
  },
  connect: {
    id: 'loginPage.connect',
    defaultMessage: 'Connect to {name}',
  },
  import: {
    id: 'loginPage.import',
    defaultMessage: 'Import your {name}',
  },
  metamask: {
    id: 'loginPage.metamask',
    defaultMessage: 'Metamask',
  },
  wallet: {
    id: 'loginPage.wallet',
    defaultMessage: 'Wallet',
  },
});

const Wrapper = styled.div`
  padding: 10px;
`;

const Announcement = styled.section`
  margin: 10px;
`;

const Notes = styled.section`
  margin: 10px;
`;

const Reminder = styled.div``;

const LoginMethods = styled.div`
  display: flex;
  flex-direction: row;
`;

const Provider = styled(Card).attrs({
  interactive: true,
})`
  margin: 10px;
  height: 200px;
  flex: 1;
`;
