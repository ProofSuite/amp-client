import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Callout } from '@blueprintjs/core';
import MetamaskIcon from '../../components/Icons/Metamask';
import KeyIcon from '../../components/Icons/Key';

class LoginPage extends React.PureComponent {
  render() {
    const { connectMetamask, importWallet, isDefaultAccountSet } = this.props;

    if (isDefaultAccountSet) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <Announcement>
          <Callout intent="success" title="Important notice">
            <AnnouncementMessages>
              <FormattedMessage
                {...messages.announcement}
                values={{ link: <a href="https://proof-amp.com">https://proof-amp.com</a> }}
              />
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
            </AnnouncementMessages>
          </Callout>
        </Announcement>
        <LoginMethods>
          <LoginMethodsHeading>
            <FormattedMessage {...messages.loginMethods} />
          </LoginMethodsHeading>
          <LoginCards>
            <LoginCard onClick={connectMetamask}>
              <MetamaskIcon size={160} />
              <Heading>
                <FormattedMessage {...messages.metamask} />
              </Heading>
            </LoginCard>
            <LoginCard onClick={importWallet}>
              <KeyIcon size={160} />
              <Heading>
                <FormattedMessage {...messages.wallet} />
              </Heading>
            </LoginCard>
          </LoginCards>
        </LoginMethods>
      </Wrapper>
    );
  }
}

export default LoginPage;

const Wrapper = styled.div`
  display: grid;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
`;

const Announcement = styled.section``;

const Heading = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Notes = styled.section`
  margin: 10px;
`;

const Reminder = styled.div``;

const LoginMethods = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginMethodsHeading = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

const LoginCards = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AnnouncementMessages = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LoginCard = styled(Card).attrs({
  interactive: true,
})`
  margin: 10px;
  height: 13em;
  width: 13em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  loginMethods: {
    id: 'loginPage.loginMethodsHeading',
    defaultMessage: 'Select a login method',
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
