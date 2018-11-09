// @flow
import React from 'react'
import GetStartedModalRenderer from './GetStartedModalRenderer'

import { setShowHelpModalSetting } from '../../store/services/storage'

type Props = {
  ETHAddress: string,
  ETHBalance: number,
  WETHBalance: number,
  WETHAllowance: number,
  convertETH: number => void,
  approveWETH: void => void,
  approveTxState: Object,
  convertTxState: Object,
  redirectToTradingPage: void => void,
  isOpen: boolean,
  closeHelpModal: void => void,
}

type State = {
  step: string,
  convertAmount: number,
  convertFraction: number,
  showHelpModalChecked: boolean,
}


class GetStartedModal extends React.PureComponent<Props, State> {
  state = {
    step: '1',
    convertAmount: 0,
    convertFraction: 0,
    showHelpModalChecked: false,
  }

  goToFirstStep = () => {
    this.setState({ step: '1' })
  }

  goToSecondStep = () => {
    this.setState({ step: '2' })
  }

  goToThirdStep = () => {
    this.setState({ step: '3' })
  }

  changeConvertETHFraction = (convertFraction: number) => {
    this.setState((prevState, { ETHBalance }) => {
      return {
        ...prevState,
        convertFraction: convertFraction,
        convertAmount: ETHBalance * convertFraction / 100,
      }
    })
  };

  toggleShowHelpModalCheckBox = () => {
    this.setState({ showHelpModalChecked: !this.state.showHelpModalChecked })
  }

  handleClose = () => {
    let { closeHelpModal } = this.props
    let { showHelpModalChecked } = this.state

    setShowHelpModalSetting(!showHelpModalChecked)
    closeHelpModal()
  }

  handleConvertETH = () => {
    let { convertAmount } = this.state
    this.props.convertETH(convertAmount)
  }

  handleApproveWETH = () => {
    this.props.approveWETH()
  }

  render() {
    const {
      step,
      convertAmount,
      convertFraction,
      showHelpModalChecked,
     } = this.state

    const {
      ETHAddress,
      ETHBalance,
      WETHBalance,
      WETHAllowance,
      approveTxState,
      convertTxState,
      redirectToTradingPage,
      isOpen
    } = this.props

    const userHasETH = ETHBalance > 0
    const userHasWETH = WETHBalance > 0
    const userHasApprovedWETH = WETHAllowance > 0
    const { approveTxStatus, approveTxHash } = approveTxState
    const { convertTxStatus, convertTxHash } = convertTxState

    return (
      <GetStartedModalRenderer
        step={step}
        goToFirstStep={this.goToFirstStep}
        goToSecondStep={this.goToSecondStep}
        goToThirdStep={this.goToThirdStep}
        changeConvertETHFraction={this.changeConvertETHFraction}
        handleClose={this.handleClose}
        handleConvertETH={this.handleConvertETH}
        handleApproveWETH={this.handleApproveWETH}
        ETHAddress={ETHAddress}
        ETHBalance={ETHBalance}
        WETHBalance={WETHBalance}
        convertAmount={convertAmount}
        convertFraction={convertFraction}
        userHasETH={userHasETH}
        userHasWETH={userHasWETH}
        userHasApprovedWETH={userHasApprovedWETH}
        approveTxStatus={approveTxStatus}
        approveTxHash={approveTxHash}
        convertTxStatus={convertTxStatus}
        convertTxHash={convertTxHash}
        redirectToTradingPage={redirectToTradingPage}
        toggleShowHelpModalCheckBox={this.toggleShowHelpModalCheckBox}
        showHelpModalChecked={showHelpModalChecked}
        isOpen={isOpen}
      />
    )
  }
}

export default GetStartedModal