// @flow
import React from 'react'
import styled from 'styled-components'
import { Button , ModalBody, ModalFooter, Header, FlexRow, FlexColumn, Text, Link } from '../../Common'
import Modal from '../../Modal'
import { DISCORD_URL, MEDIUM_URLS } from '../../../config/urls'


import { Callout, Checkbox, Tabs, Tab } from '@blueprintjs/core'

type Props = {
  step: string,
  goToSecondStep: void => void,
  goToThirdStep: void => void,
  userHasETH: boolean,
  userHasWETH: boolean,
  userHasApprovedWETH: boolean,
  handleConvertETH: void => void,
  handleApproveWETH: void => void,
  ETHBalance: number,
  WETHBalance: number,
  convertAmount: number,
  convertFraction: number,
  changeConvertETHFraction: number => void,
  ETHAddress: string,
  approveTxStatus: string,
  approveTxHash: string,
  convertTxStatus: string,
  convertTxHash: string,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
  
}

const FirstStep = (props: Props) => {
  const { currentTab, handleChangeTab } = props;
  return (
    <React.Fragment>
      <SideMenu ml={3} mt={3}>
        <Button
          my={1}
          text="Get Started"
          onClick={() => handleChangeTab('default')}
          active={currentTab === 'default'}
          intent={currentTab === 'default' ? 'primary' : 'none'}
        />
        <Button
          my={1}
          text="Basics"
          onClick={() => handleChangeTab('basics')}
          active={currentTab === 'basics'}
          intent={currentTab === 'basics' ? 'primary' : 'none'}
        />
        <Button
          my={1}
          text="Security"
          onClick={() => handleChangeTab('security')}
          active={currentTab === 'security'}
          intent={currentTab === 'security' ? 'primary' : 'none'}
        />
        {/* <Button
          my={1}
          text="How to trade"
          onClick={() => handleChangeTab('startTrading')}
          active={currentTab === 'startTrading'}
          intent={currentTab === 'startTrading' ? 'primary' : 'none'}
          // intent={currentTab === "startTrading" && "primary"}
        /> */}
        
        <Button
          my={1}
          text="Community/News"
          onClick={() => handleChangeTab('news')}
          active={currentTab === 'news'}
          intent={currentTab === 'news' ? 'primary' : 'none'}
          // intent={currentTab === "news" && "primary"}
        />
      </SideMenu>
      <Tabs selectedTabId={currentTab}>
        <Tab id="default" panel={<GetStartedSectionRenderer {...props} />} />
        <Tab id="basics" panel={<BasicsSectionRenderer {...props} />} />
        <Tab id="security" panel={<SecuritySectionRenderer {...props} />} />
        <Tab id="news" panel={<NewsSectionRenderer {...props} />} />
        <Tab id="startTrading" panel={<StartTradingContentRenderer {...props} />} />
      </Tabs>
    </React.Fragment>
  );
};

const GetStartedSectionRenderer = (props: Props) => {
  const {
    goToSecondStep,
    goToThirdStep,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox
  } = props

  return (
    <React.Fragment>
      <ModalBody>
        <ModalText>
        <Callout intent='warning' >
        Please take some time to read some of the information before you start trading
        </Callout>
        <br />
        <Header>Welcome</Header>
        <p>• AMP is an open-source cryptocurrency exchange which gives you full control over your funds.</p>
        <p>• We allow you to trade directly from your wallet without the need for deposits and withdrawals.</p>
        <p>• We do not control your account and therefore cannot help you recover your funds if you send them to the wrong address or lose your private key. 
        You are fully responsible for your security.</p>
        <p>• Trades performed on AMP are immediately settled on the Ethereum blockchain. For better performance and UX, the orderbook is currently centralized.</p>
        <br />
        <Header>🛡️ Security advice</Header>
        <p>• Verify that you are on https://amp.exchange everytime you log in</p>
        <p>• We recommend to use Metamask for the most secure trading experience</p>
        <p>• We do not control your account and therefore cannot help you recover your funds if you send them to the wrong address or lose your private key. You are fully responsible for your security.</p>
        <p>• Only invest and trade what you can afford to risk</p>
        <br />
        <Header>❔ Ask for help or join the Proofsuite community</Header>
        <p>• Write to us anytime at: support@proofsuite.com</p>
        <p>• If you have any suggestions, or want to get involved with the project, join us on <a href={DISCORD_URL}>Discord</a></p>
        <br />
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
          <div>
            <Button onClick={goToThirdStep}>Skip</Button>
            <Button onClick={goToSecondStep} intent='primary'>
              I understand. Let's get started!
            </Button>
          </div>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  )
}

const SecuritySectionRenderer = (props: Props) => {
  const { showHelpModalChecked, toggleShowHelpModalCheckBox } = props;

  return (
    <React.Fragment>
      <ModalBody>
        <ModalText>
          <Callout intent="warning">
            Please take some time to read the information below before you start trading
          </Callout>
          <br />
          <Header>Stay secure</Header>
            <p>• Verify that you are on https://amp.exchange everytime you log in.</p>
            <p>• We recommend to use Metamask for the most secure trading experience.</p>
            <p>• We cannot recover your funds or freeze your account if you visit a phising ite or lose your private key.</p>
            <p>• Blockchain transactions are irreversible. We can not undo a transaction you've just sent. </p>
            <p>• Never disclose your password, private keys or other authentication elements to anyone, including Proof Suite support.</p>
            <p>• Be diligent to keep your private key and password safe.</p>
          <br />        
          <Header>Scams and Hacks</Header>
          <p>• Do not store your private key in Dropbox, Google Drive or other cloud storage. If that account is compromised, your funds will be stolen.</p>
          <p>• If you enter your private key on a phishing website, you will have all your funds taken. </p>
          <p>• If you send your public key (address) to someone, they now have full control of your account. </p>
          <p>• Do not trust messages or links sent to you randomly via email, Slack, Discord, Reddit, Twitter, etc.</p>
          <p>• Always naviate directly to a site before you enter information. Do not enter information after clicking a link
            from a message or email. </p>
          <p>• Do not run remote-access software (Teamviewer).</p>
          <p>• Do not click on advertisements.</p>
          <br />
          <Header>Technology Risks</Header>
          <p>• Ethereum tokens are highly volatile.</p>
          <p>• Ethereum token values are strictly determined by the value market participants place on them through their transactions, which means 
          a loss of confidence may lead to an abrupt drop in value.</p>
          <br />
          <Header>Financial Risks</Header>
          <p>• Only invest and trade what you can afford to lose.</p>
          <p>• Ethereum tokens are highly volatile.</p>
          <p>• Ethereum token values are strictly determined by the value market participants place on them through their transactions, which means 
          a loss of confidence may lead to an abrupt drop in value. </p>
          <br />
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  );
};

const NewsSectionRenderer = (props: Props) => {
  const { toggleShowHelpModalCheckBox, showHelpModalChecked } = props;

  return (
    <React.Fragment>
      <ModalBody>
        <ModalText>
          <Callout>
            The latest news on everything AMP and Proofsuite
          </Callout>
          <br />
          <Link url={MEDIUM_URLS.AMP_INTRODUCTION}>
            <Header>🛸 Quick Introduction to the AMP decentralized exchange</Header>
          </Link>
          <p>A quick introduction to the AMP decentralized and everything you can do with it.</p>

          <Link url={MEDIUM_URLS.AMP_JPMORGAN}>
            <Header mt={5}>🏦 JP Morgan's Blockchain supported by Proof Suite's decentralized exchange.</Header>
          </Link>

          <Link url={MEDIUM_URLS.AVOCADO_POWER}>
            <Header mt={5}>🥑 The power of the avocado terminal</Header>
          </Link>
          <p>An in-depth presentation of some of the functionalities of the Avocado terminal, the flagship Proofsuite product.</p>

          <Header mt={5}>❔ Ask for help or join the Proofsuite community</Header>
          <p>• Write to us anytime at: support@proofsuite.com</p>
          <p>• If you have any suggestions, or want to get involved with the project, join us on <Link url={DISCORD_URL}>Discord</Link>.</p>
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  );
}

const BasicsSectionRenderer = (props: Props) => {
  const { toggleShowHelpModalCheckBox, showHelpModalChecked } = props;

  return (
    <React.Fragment>
      <ModalBody>
        <ModalText>
          <br />
          <Header>Where can i get Ether ?</Header>
          <p>• Buy Ether with any credit card at <Link url="https://changelly.com/exchange/USD/ETH/40.00?ref_id=7p3c4jpz35b1nwak">Changelly</Link>.</p>
          <br />
          <Header>What is WETH and why do i have to use it ?</Header>
          <p>• Ether or ETH is the native currency of the Ethereum blockchain. ETH is not an ERC20 token. </p>
          <p>• WETH is an ERC20 version of ETH. When you are converting ETH to WETH, you the same amount of WETH you've converted. </p>
          <p>• WETH allows decentralized applications such as the AMP decentralized exchange to offer better functionality and a better user experience. Learn more about WETH <Link url="https://weth.io/">here</Link>.</p>
          <br />
          <Header>What happens if I unlock a token or token pair ?</Header>
          <p>• To trade a token pair, you need to unlock both tokens. Alternatively you can unlock the pair directly on the trading page. </p>
          <p>• Unlocking a token pair allows our smart-contract to settle transactions directly between two user wallets. </p>
          <p>• With this system you can keep your tokens in your wallet while making orders and trades on AMP. </p>
          <br />
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  );
};

const StartTradingContentRenderer = (props: Props) => {
  const { toggleShowHelpModalCheckBox, showHelpModalChecked } = props;

  return (
    <React.Fragment>
      <ModalBody>
        <ModalText>
          <Callout intent="warning">
            The latest news about AMP and Proofsuite
          </Callout>
          <br />
          <Header>What is AMP ?</Header>
          <p>• AMP is an open-source cryptocurrency exchange which gives you full control over your funds.</p>
          <p>• We allow you to trade directly from your wallet without the need for deposits and withdrawals.</p>
          <p>
            • We do not control your account and therefore cannot help you recover your funds if you send them to the
            wrong address or lose your private key. You are fully responsible for your security.
          </p>
          <p>
            • Trades performed on AMP are immediately settled on the Ethereum blockchain. For better performance and UX,
            the orderbook is currently centralized.
          </p>
          <br />
          <Header>Security advice</Header>
          <p>• Verify that you are on https://amp.exchange everytime you log in.</p>
          <p>• We recommend to use Metamask for the most secure trading experience.</p>
          <p>
            • We do not control your account and therefore cannot help you recover your funds if you send them to the
            wrong address or lose your private key. You are fully responsible for your security.
          </p>
          <p>• Only invest and trade what you can afford to risk.</p>
          <br />
        </ModalText>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  );
};




const SideMenu = styled(FlexColumn)``;

const ModalContent = styled(FlexRow)``;

const ModalText = styled.div`
  overflow-y: scroll;
  max-height: 400px;
`

const FooterBox = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
`

export default FirstStep
