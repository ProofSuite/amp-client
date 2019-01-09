import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import styled, { keyframes }  from 'styled-components'
import WalletLoginForm from '../../components/WalletLoginForm'
import CreateWalletForm from '../../components/CreateWalletForm'
import type { CreateWalletParams } from '../../types/createWallet'

import { 
  Callout, 
  Spinner, 
  Button
} from '@blueprintjs/core'

import { 
  Centered, 
  Divider, 
  LargeText, 
  LinkText, 
  Colors, 
  Flex, 
  Indent,
  FlexRow,
  Box,
  TwitterShareLink,
  Card
} from '../../components/Common'

import {
  Devices
} from '../../components/Common/Variables'


type Props = {
  view: string,
  showWalletLoginForm: CreateWalletParams => void,
  showLoginMethods: () => void,
  loginWithMetamask: void => void,
  loginWithLedger: void => void,
  loginWithWallet: void => void,
}

const LoginPageRenderer = (props: Props) => {
  const {
    view,
    loginWithMetamask,
    loginWithWallet,
    loginWithLedger,
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
        loginWithLedger={loginWithLedger}
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
  
  const { 
    showWalletLoginForm, 
    loginWithMetamask, 
    loginWithLedger,
    metamaskStatus, 
    showCreateWallet
  } = props

  return (
    <FlexRow p={5} pb={6} justifyContent="space-between">
      <Box />
      <WelcomeCard intent="success" title="Disclaimer" hideOnTablet>
          <WelcomeMessage>
            Welcome to <div className="glitch" data-text="AMP!">AMP!</div>
          </WelcomeMessage>
          <h3>
          Trade from your own wallet, without waiting for deposits and with the security of instant blockchain settlements.
          </h3>
          <AnnouncementMessages>
            • <FormattedMessage
              {...messages.announcement}
              values={{ link: <a href="https://amp.exchange">https://amp.exchange</a> }}
            />
            <br />
            <br />
            <Reminder>
              • <FormattedMessage {...messages.noDisclosure} />
            </Reminder>
            <br />
            <Reminder>
              • <FormattedMessage {...messages.noOfficialStaffs} />
            </Reminder>
            <br />
            <Reminder>
              • <FormattedMessage {...messages.exchangeLaws} />
            </Reminder>
            <br />
            <Reminder>
              • <FormattedMessage {...messages.tokenListing} />
            </Reminder>
            <br />
            <Reminder>
              • Support us by sharing on <TwitterShareLink />
            </Reminder>
            <br />
          </AnnouncementMessages>
      </WelcomeCard>
      <LoginMethodsBox>
        <LoginMethodsHeading>
          <FormattedMessage {...messages.loginMethods} />
        </LoginMethodsHeading>
            <LoginCards>
                <Flex flexDirection="column" width="100%">
                  <Flex flexDirection="column" py={1}>
                    <StyledButton 
                      onClick={loginWithMetamask} 
                      disabled={metamaskStatus === "undefined"}
                      large 
                      intent="primary"
                      fill
                    >
                      {
                        metamaskStatus === "undefined" 
                        ? <FormattedMessage {...messages.metamaskNotFound} />
                        : <FormattedMessage {...messages.metamask} />
                      }                      
                    </StyledButton>
                      {
                        metamaskStatus === "undefined"
                          ? (
                          <Flex p={1} justifyContent="flex-end">
                            <Indent />
                            <a href="https://metamask.io/">→ Get Metamask</a>
                          </Flex>
                          )
                          : null
                      }
                  </Flex>
                  {/* <Flex flexDirection="column" py={1}>
                    <StyledButton 
                      onClick={loginWithLedger} 
                      large 
                      intent="primary"
                      fill
                    >
                        <FormattedMessage {...messages.ledger} />
                    </StyledButton>
                  </Flex> */}
                  <Flex flexDirection="column" py={1}>
                    <StyledButton onClick={showWalletLoginForm} large intent="primary" fill>
                      <FormattedMessage {...messages.wallet} />
                    </StyledButton>
                    <Flex p={1} justifyContent="flex-end">
                      <LinkText onClick={showCreateWallet}>→ Create a new wallet</LinkText>
                    </Flex>
                  </Flex>
                </Flex>
            </LoginCards>
      </LoginMethodsBox>
      <Box />
    </FlexRow>
  )
}

export default LoginPageRenderer


const StyledButton = styled(Button)`
  box-shadow: ${"0 3px 20px " + Colors.BLUE1 + "!important;"}
  &hover: {
    background-color: ${Colors.BLUE5}
    box-shadow: ${"0 3px 20px " + Colors.BLUE5 + "!important;"}
  }
`

const WelcomeCard = styled(Card)`
  width: 500px;
`

const LoginMethodsBox = styled(Box)`
  width: 30%;

  @media ${Devices.tablet} {
    width: 60%;
  }

  @media ${Devices.mobileL} {
    width: 100%;
  }
`

const WidgetWrapper = styled.div`
  width: 600px;
  margin: 60px auto;
`;

const Reminder = styled.div``;

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

const WelcomeMessage = styled.div`
  font-size: 40px;
`

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
  tokenListing: {
    id: 'loginPage.tokenListing',
    defaultMessage: 'For inquiries about listing your token, contact us at support@proofsuite.com.'
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
  ledger: {
    id: 'loginPage.ledger',
    defaultMessage: 'Ledger',
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
