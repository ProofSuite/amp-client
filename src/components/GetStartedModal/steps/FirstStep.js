// @flow
import React from 'react'
import styled from 'styled-components'
import { Callout, Button, Checkbox } from '@blueprintjs/core'
import { ModalBody, ModalFooter } from '../../Common'
import { DISCORD_URL } from '../../../config/urls'

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
        Please take some time to read the information below before you start trading
        </Callout>
        <br />
        <h2>What is AMP ?</h2>
        <p>• AMP is an open-source cryptocurrency exchange which gives you full control over your funds.</p>
        <p>• We allow you to trade directly from your wallet without the need for deposits and withdrawals.</p>
        <p>• We do not control your account and therefore cannot help you recover your funds if you send them to the wrong address or lose your private key. 
        You are fully responsible for your security.</p>
        <p>• Trades performed on AMP are immediately settled on the Ethereum blockchain. For better performance and UX, the orderbook is currently centralized.</p>
        <br />
        <h2>Security advice</h2>
        <p>• Verify that you are on https://amp.exchange everytime you log in</p>
        <p>• We recommend to use Metamask for the most secure trading experience</p>
        <p>• We do not control your account and therefore cannot help you recover your funds if you send them to the wrong address or lose your private key. You are fully responsible for your security.</p>
        <p>• Only invest and trade what you can afford to risk</p>
        <br />
        <h2>Ask for help or join the Proofsuite community</h2>
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
            <Button large onClick={goToThirdStep}>Skip</Button>
            <Button onClick={goToSecondStep} large intent='primary'>
              I understand. Let's get started!
            </Button>
          </div>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  )
}

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
