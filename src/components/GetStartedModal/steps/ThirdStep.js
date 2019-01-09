// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Intent } from '@blueprintjs/core'
import { ModalFooter, ModalBody } from '../../Common'
import { DISCORD_URL } from '../../../config/urls'

type Props = {
  step: string,
  goToFirstStep: void => void,
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
  handleClose: void => void,
  redirectToTradingPage: void => void,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
}

const Thirdstep = (props: Props) => {
  const {
    handleClose,
    redirectToTradingPage,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox
  } = props

  return (
    <React.Fragment>
      <ModalBody>
        <Box>
          <h2>Choose what to do next:</h2>
          <ButtonGroupBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={redirectToTradingPage} large>
                Start Trading Now
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={handleClose} large>
                View Portfolio / Deposit more Funds
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} large>Read Frequently Questions</Button>
            </ButtonBox>
          </ButtonGroupBox>
          <ContactLinksBox>
            <p>Contact us at support@proofsuite.com</p>
            <p>Join our <a href={DISCORD_URL}>Discord</a> channel</p>
          </ContactLinksBox>
        </Box>
      </ModalBody>
      <ModalFooter>
        <FooterBox>
          <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
            Do not show again
          </Checkbox>
          <Button large onClick={handleClose}>Close</Button>
        </FooterBox>
      </ModalFooter>
    </React.Fragment>
  )
}

const Box = styled.div`
  text-align: center;
`

const ButtonBox = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ButtonGroupBox = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const FooterBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const ContactLinksBox = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Thirdstep
