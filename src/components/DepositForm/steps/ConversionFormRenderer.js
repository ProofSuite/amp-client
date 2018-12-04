import React from 'react'
import styled from 'styled-components'
import { ModalBody } from '../../Common'
import { Button, Callout, Checkbox, Icon, Slider } from '@blueprintjs/core'

type Props = {
  step: 'waiting' | 'convert' | 'confirm',
  address: string,
  balance: ?number,
  tokens: Array<Object>,
  token: Object,
  isEtherDeposit: boolean,
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  toggleShouldConvert: void => void,
  toggleTokenSuggest: void => void,
  showTokenSuggest: boolean,
  handleChangeToken: SyntheticEvent<> => void,
  handleSubmitChangeToken: SyntheticEvent<> => Promise<void>,
  handleConfirm: SyntheticEvent<> => void,
  allowTradingCheckboxDisabled: boolean,
  submitButtonDisabled: boolean,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
}

const ConversionStepRenderer = (props: Props) => {
  const {
    shouldAllow,
    toggleShouldAllowTrading,
    handleConfirm,
    isEtherDeposit,
    balance,
    token,
    submitButtonDisabled,
    allowTradingCheckboxDisabled
  } = props

  return (
    <ModalBody>
      <Callout intent='success' title='Deposit Received'>
        To be able to trade on the AMP platform, you will need to allow the exchange smart-contract to trade with your
        tokens. Learn more.
      </Callout>
      <EtherBalanceBox>
        <p>Your total wallet balance is currently:</p>
        <h1>
          {balance} {token.symbol}
        </h1>
      </EtherBalanceBox>
      {isEtherDeposit && renderSliderBox(props)}
      <br />
      <Checkbox
        checked={shouldAllow}
        disabled={allowTradingCheckboxDisabled}
        label='Authorize WETH trading'
        onChange={toggleShouldAllowTrading}
      />
      <p>
        <Icon intent='warning' icon='warning-sign' />
        {' '}
        This is required for trading (requires a blockchain transaction)
      </p>
      <Button
        intent='primary'
        onClick={handleConfirm}
        disabled={submitButtonDisabled}
        text='Enable Trading'
        large
        fill
      />
    </ModalBody>
  )
}

const renderSliderBox = (props: Props) => {
  const { shouldConvert, toggleShouldConvert, handleChangeConvertAmount, convertAmount } = props
  return (
    <div>
      <Checkbox
        checked={shouldConvert}
        label='Convert to Wrapper Ether'
        onChange={toggleShouldConvert}
      />
      <SliderBox>
        <Slider
          disabled={!shouldConvert}
          max={100}
          min={0}
          onChange={handleChangeConvertAmount}
          value={convertAmount}
          labelStepSize={25}
        />
        <p>This is required for trading. Read more about wrapper ether here</p>
      </SliderBox>
    </div>
  )
}

const EtherBalanceBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SliderBox = styled.div`
  width: 430px;
`

export default ConversionStepRenderer
