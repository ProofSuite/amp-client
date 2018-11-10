import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Callout, Card, Intent, Spinner, Tag } from '@blueprintjs/core'
import WalletLoginForm from '../../components/WalletLoginForm'
import CreateWalletForm from '../../components/CreateWalletForm'
import MetamaskIcon from '../../components/Icons/Metamask'
import { KeyIcon, WalletIcon } from '../../components/Icons'
import { Centered, Divider, LargeText, Colors } from '../../components/Common'
import type { CreateWalletParams } from '../../types/createWallet'

type Props = {
  view: string,
  showWalletLoginForm: CreateWalletParams => void,
  showLoginMethods: () => void,
  loginWithMetamask: void => void,
  loginWithWallet: void => void,
}

const LoginPageRenderer = (props: Props) => {
  const {
    view,
    loginWithMetamask,
    loginWithWallet,
    showCreateWallet,
    showWalletLoginForm,
    metamaskStatus,
    showLoginMethods,
    walletCreated,
  } = props

  const views = {
    loginMethods: (
      <LoginMethodsView
        showWalletLoginForm={showWalletLoginForm}
        loginWithMetamask={loginWithMetamask}
        showCreateWallet={showCreateWallet}
        metamaskStatus={metamaskStatus}
      />
    ),
    wallet: (
      <WalletLoginViewWrapper>
        <WalletLoginForm loginWithWallet={loginWithWallet} showLoginMethods={showLoginMethods} />
      </WalletLoginViewWrapper>
    ),
    createWallet: (
      <CreateWalletViewWrapper>
        <CreateWalletForm walletCreated={walletCreated} showLoginMethods={showLoginMethods}/>
      </CreateWalletViewWrapper>
    ),
    loading: (
      <Centered>
        <Spinner large intent="primary" />
        <Divider />
        <LargeText intent="primary">Logging In ...</LargeText>
      </Centered>
    ),
  }

  return views[view]
}

const LoginMethodsView = (props: Props) => {
  const { showWalletLoginForm, loginWithMetamask, metamaskStatus, showCreateWallet } = props
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
          <LoginCard onClick={loginWithMetamask}>
            <MetamaskIcon size={100} />
            <Heading>
              <FormattedMessage {...messages.metamask} />
            </Heading>
            <MetamaskStatusTag>{metamaskStatuses[metamaskStatus]}</MetamaskStatusTag>
          </LoginCard>
          <LoginCard onClick={showWalletLoginForm}>
            <KeyIcon size={100} />
            <Heading>
              <FormattedMessage {...messages.wallet} />
            </Heading>
          </LoginCard>
          <LoginCard onClick={showCreateWallet}>
            <WalletIcon size={100} color={Colors.WHITE} />
            <Heading>
              <FormattedMessage {...messages.createWallet} />
            </Heading>
          </LoginCard>
        </LoginCards>
      </LoginMethods>
    </Wrapper>
  )
}

export default LoginPageRenderer

const Wrapper = styled.div`
  display: grid;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
`;

const WalletLoginViewWrapper = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CreateWalletViewWrapper = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Announcement = styled.section``;

const Heading = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
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

const MetamaskStatusTag = styled(Tag).attrs({
  intent: Intent.SUCCESS,
  interactive: true,
  minimal: true,
  textalign: 'center',
})``;

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
  createWallet: {
    id: 'loginPage.createWallet',
    defaultMessage: 'Create Wallet',
  },
});

const metamaskStatuses = {
  undefined: 'Not found',
  locked: 'Locked',
  unlocked: 'Connected',
};
