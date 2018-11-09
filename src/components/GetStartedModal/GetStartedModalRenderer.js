// @flow
import React from 'react'
import Modal from '../Modal'
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import ThirdStep from './steps/ThirdStep'

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
  redirectToTradingPage: void => void,
  toggleShowHelpModalCheckBox: void => void,
  showHelpModalChecked: boolean,
  handleClose: void => void,
  isOpen: boolean,
  transactionsPending: boolean,
  transactionsComplete: boolean,
}


const GetStartedModalRenderer = (props: Props) => {
  return (
    <Modal title="Get Started" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
      <StepsRenderer {...props} />
    </Modal>
  )
}

const StepsRenderer = (props: Props) => {
  switch(props.step) {
    case '1':
      return <FirstStep {...props} />
    case '2':
      return <SecondStep {...props} />
    case '3':
      return <ThirdStep {...props} />
    default:
      return null
  }
}

export default GetStartedModalRenderer