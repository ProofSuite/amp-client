import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Callout, Card, Intent, Spinner, Tag, Button } from '@blueprintjs/core'
import WalletLoginForm from '../../components/WalletLoginForm'
import CreateWalletForm from '../../components/CreateWalletForm'
import { Centered, Divider, LargeText, LinkText, Colors, Box, Flex, Indent } from '../../components/Common'
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
      <WidgetWrapper>
        <WalletLoginForm loginWithWallet={loginWithWallet} showLoginMethods={showLoginMethods} />
      </WidgetWrapper>
    ),
    createWallet: (
      <WidgetWrapper>
        <CreateWalletForm walletCreated={walletCreated} showLoginMethods={showLoginMethods}/>
      </WidgetWrapper>
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
        <Callout intent="success" title="Disclaimer">
          <AnnouncementMessages>
            <FormattedMessage
              {...messages.announcement}
              values={{ link: <a href="https://amp.exchange">https://amp.exchange</a> }}
            />
            <Reminder>
              <FormattedMessage {...messages.noDisclosure} />
            </Reminder>
            <Reminder>
              <FormattedMessage {...messages.noOfficialStaffs} />
            </Reminder>
            <Reminder>
              <FormattedMessage {...messages.exchangeLaws} />
            </Reminder>
          </AnnouncementMessages>
        </Callout>
      </Announcement>
      <LoginMethods>
        <LoginMethodsHeading>
          <FormattedMessage {...messages.loginMethods} />
        </LoginMethodsHeading>
            <LoginCards>
                <Flex flexDirection="column" width="30%">
                  <Flex p={2} flexDirection="column">
                    <Button onClick={loginWithMetamask} disabled={metamaskStatus === "undefined"}large intent="primary" fill>
                      {
                        metamaskStatus === "undefined" 
                        ? <FormattedMessage {...messages.metamaskNotFound} />
                        : <FormattedMessage {...messages.metamask} />
                      }
                    </Button>
                    <Flex p={1} justifyContent="right">
                      <Indent />
                      {metamaskStatus === "undefined" && <a href="https://metamask.io/">→ Get Metamask</a>}
                    </Flex>
                  </Flex>
                  <Box p={2}>
                    <Button onClick={showWalletLoginForm} large intent="primary" fill>
                      <FormattedMessage {...messages.wallet} />
                    </Button>
                    <Flex p={1} justifyContent="right">
                      <LinkText onClick={showCreateWallet}>→ Create a new wallet</LinkText>
                    </Flex>
                  </Box>
                </Flex>
            </LoginCards>
      </LoginMethods>
    </Wrapper>
  )
}

export default LoginPageRenderer


// box-shadow: ${"inset 0 0 2px" + Colors.BLACK + ", 0 0 2px " + Colors.BLUE5 + "!important;"};


const Wrapper = styled.div`
  display: grid;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 6em;
`;

const WidgetWrapper = styled.div`
  width: 600px;
  margin: 60px auto;
`;

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
  padding-top: 1em;
`;

const LoginCards = styled.div`
  padding-bottom: 20px;
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
  height: 11.5em;
  width: 11.5em;
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
    defaultMessage: 'Make sure you are visiting {link} to prevent any phishing attacks.',
  },
  noPlugins: {
    id: 'loginPage.noPlugins',
    defaultMessage: "Never trade more value than you are willing to lose.",
  },
  thisAppIsInBeta: {
    id: 'loginPage.thisAppIsInBeta',
    defaultMessage: "This app is in beta. Please expect a certain amount of bugs for upcoming weeks.",
  },
  exchangeLaws: {
    id: 'loginPage.exchangeLaws',
    defaultMessage: ' To adhere to international securities and exchange laws, AMP Marketplace prohibits use of this platform by US and South Korean residents. By using this platform, you are confirming that you are not excluded from use by this criteria.',
  },
  noOfficialStaffs: {
    id: 'loginPage.noOfficialStaffs',
    defaultMessage: 'Never make transactions or send funds to anyone who claims to be a member of Proof Suite support.',
  },
  noDisclosure: {
    id: 'loginPage.noDisclosure',
    defaultMessage:
      'Never disclose your password, private keys or other authentication elements to anyone, including Proof Suite support.',
  },
  loginMethods: {
    id: 'loginPage.loginMethodsHeading',
    defaultMessage: 'Choose a login method',
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
  metamaskNotFound: {
    id: 'loginPage.metamask',
    defaultMessage: 'Metamask not detected'
  },
  wallet: {
    id: 'loginPage.wallet',
    defaultMessage: 'Wallet',
  },
  createWallet: {
    id: 'loginPage.createWallet',
    defaultMessage: 'Create a new wallet',
  },
});

const metamaskStatuses = {
  undefined: 'Not found',
  locked: 'Locked',
  unlocked: 'Connected',
};
