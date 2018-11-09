// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, Callout, Slider, Icon, Spinner, Checkbox } from '@blueprintjs/core'
import { ModalBody, ModalFooter } from '../../Common'
import SmallTxNotification from '../../SmallTxNotification'
import { formatNumber } from 'accounting-js'

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
  convertTxStatus: string,
  convertTxHash: string,
  approveTxStatus: string,
  approveTxHash: string,
  showHelpModalChecked: boolean,
  toggleShowHelpModalCheckBox: void => void,
}

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
`

const SecondStep = (props: Props) => {
  const {
    goToFirstStep,
    goToThirdStep,
    userHasETH,
    userHasWETH,
    userHasApprovedWETH,
    handleConvertETH,
    handleApproveWETH,
    ETHBalance,
    WETHBalance,
    convertAmount,
    convertFraction,
    changeConvertETHFraction,
    ETHAddress,
    convertTxStatus,
    convertTxHash,
    approveTxStatus,
    approveTxHash,
    showHelpModalChecked,
    toggleShowHelpModalCheckBox
  } = props

  if (userHasWETH && userHasApprovedWETH) {
    return (
      <React.Fragment>
        <ModalBody>
          <IconBox>
            <Icon intent='success' iconSize={180} icon='tick-circle' />
            <h2>You're all set! Click to continue.</h2>
          </IconBox>
          <NotificationBox>
            {convertTxHash &&
              <SmallTxNotification
                txName='Conversion Transaction'
                status={convertTxStatus}
                hash={convertTxHash}
              />}
          </NotificationBox>
          <NotificationBox>
            {approveTxHash &&
              <SmallTxNotification
                txName='Approval Transaction'
                status={approveTxStatus}
                hash={approveTxHash}
              />}
          </NotificationBox>
        </ModalBody>
        <ModalFooter>
          <ButtonBox>
            <Button intent='primary' large onClick={goToThirdStep} text='Continue' />
          </ButtonBox>
        </ModalFooter>
      </React.Fragment>
    )
  }

  if (userHasETH && !userHasWETH) {
    return (
      <React.Fragment>
        <ModalBody>
          <Callout intent='success' title='Tokenize your ETH to start trading!'>
            <p>
              Wrapped Ether, or WETH, is a tokenized and tradeable version of regular Ether. Ether needs to be wrapped to trade with it on Paradex. You can convert your WETH back to ETH anytime. Be sure to keep some regular ETH to pay misc. gas costs. Read more WETH (tokenized or 'wrapped') ether here.
            </p>
            <br />
            <p>
              By clicking the convert button, you will trigger two blockchain transaction.
              {' '}
              <Button minimal interactive>View FAQ</Button>
            </p>
          </Callout>
          <SliderGroup>
            <SliderBox>
              <Slider
                max={100}
                min={0}
                onChange={changeConvertETHFraction}
                value={convertFraction}
                labelStepSize={25}
              />
            </SliderBox>
          </SliderGroup>
          <BalancesGroup>
            <p>Total after transaction:</p>
            <BalancesBox>
              <BalanceBox>
                <h2>{formatNumber(Number(ETHBalance) - convertAmount, { precision: 3 })} ETH</h2>
              </BalanceBox>
              <BalanceBox>
                <h2>{formatNumber(Number(WETHBalance) + convertAmount, { precision: 3 })} WETH</h2>
              </BalanceBox>
            </BalancesBox>
          </BalancesGroup>
          <br />
          <NotificationBox>
            {convertTxHash &&
              <SmallTxNotification
                txName='Conversion Transaction'
                status={convertTxStatus}
                hash={convertTxHash}
              />}
          </NotificationBox>
          <NotificationBox>
            {approveTxHash &&
              <SmallTxNotification
                txName='Approval Transaction'
                status={approveTxStatus}
                hash={approveTxHash}
              />}
          </NotificationBox>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
              Do not show again
            </Checkbox>
            <div>
              <Button large onClick={goToThirdStep}>Skip</Button>
              <Button large intent='primary' onClick={handleConvertETH} text='Convert ETH' />
            </div>
          </FooterBox>
        </ModalFooter>
      </React.Fragment>
    )
  }

  if (userHasWETH && !userHasApprovedWETH) {
    return (
      <React.Fragment>
        <ModalBody>
          <Callout intent='success' title='Approve ether to start trading'>
            You need to grant approval to perform trades to the AMP exchange. Granting approval does not allow
            the AMP exchange to move your funds without your permission.
          </Callout>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
              Do not show again
            </Checkbox>
            <div>
              <Button large onClick={goToThirdStep}>Skip</Button>
              <Button large intent='primary' onClick={handleApproveWETH} text='Approve Trading' />
            </div>
          </FooterBox>
        </ModalFooter>
      </React.Fragment>
    )
  }

  if (!userHasETH) {
    return (
      <React.Fragment>
        <ModalBody>
          <Callout intent='success' title='Deposit Ether'>
            Send ETH to the address displayed below. This form will update once we detect your balance has changed.
          </Callout>
          <WaitingFormBox>
            <SpinnerBox>
              <Spinner intent='primary' size={130} />
            </SpinnerBox>
            <Address>{ETHAddress}</Address>
            <CurrentBalanceBox>
              (Your current balance is {ETHBalance} ETH)
            </CurrentBalanceBox>
          </WaitingFormBox>
        </ModalBody>
        <ModalFooter>
          <FooterBox>
            <Checkbox checked={showHelpModalChecked} onClick={toggleShowHelpModalCheckBox}>
              Do not show again
            </Checkbox>
            <Button large onClick={goToThirdStep}>Skip</Button>
          </FooterBox>
        </ModalFooter>
      </React.Fragment>
    )
  }
}

const SpinnerBox = styled.div`
  padding-top: 40px;
`

const FooterBox = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const WaitingFormBox = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const CurrentBalanceBox = styled.div`
  padding-top: 4px;
`

const Address = styled.div`
  padding-top: 40px;
  font-weight: bold;
`

const SliderGroup = styled.div`
  margin: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

const SliderBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 400px;
`

const BalancesGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const BalancesBox = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
`

const BalanceBox = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ConvertButtonBox = styled.div`
  width: 40%;
  margin: auto;
`

export default SecondStep
