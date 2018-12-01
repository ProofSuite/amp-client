// @flow
import React from 'react'
import styled from 'styled-components'
import { Callout, Button, Checkbox } from '@blueprintjs/core'
import { ModalBody, ModalFooter } from '../../Common'

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
        <Callout intent='success' title='Welcome to the AMP Exchange!' icon='hand' />
        <ul>
          <li>1) Before starting, make sure you are on https://amp.exchange. </li>
          <li>2) AMP allows you to trade from your own Ethereum wallet. We can not control your funds.</li>
          <li>3) All trades are settled on the Ethereum blockchain. </li>
          <li>4) Only invest and trade what you can afford to risk. </li>
        </ul>
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

const FooterBox = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
`

export default FirstStep
