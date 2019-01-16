// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Intent } from '@blueprintjs/core'
import { ModalFooter, ModalBody, FlexColumn } from '../../Common'
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
  redirectToFAQPage: void => void,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
}

const Thirdstep = (props: Props) => {
  const {
    handleClose,
    redirectToTradingPage,
    redirectToFAQPage,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox,
    goToFirstStep
  } = props

  return (
    <FlexColumn width="100%">
      <ModalBody>
        <Box>
          <h2>It seems like you have everything you need to start trading!</h2> 
          <h2>Choose what to do next:</h2>
          <ButtonGroupBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={redirectToTradingPage}>
                View Trading page
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={handleClose}>
                View Portfolio
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={redirectToFAQPage}>
                Frequently asked questions
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button intent={Intent.PRIMARY} onClick={goToFirstStep}>
                Go back to introduction modal
              </Button>
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
          <Button onClick={handleClose}>Close</Button>
        </FooterBox>
      </ModalFooter>
    </FlexColumn>
  )
}

const Box = styled.div`
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
`

const ButtonBox = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ButtonGroupBox = styled.div`
  padding-left: 25%;
  padding-right: 25%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const FooterBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

const ContactLinksBox = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Thirdstep
