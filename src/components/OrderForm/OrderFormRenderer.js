// @flow
import React from 'react'
import { Position, Tabs, Tab, Card, Button, InputGroup, Label, Colors, Collapse } from '@blueprintjs/core'
import { Flex, Box, HeaderText, MutedText } from '../Common'
import styled from 'styled-components'
import Help from '../../components/Help'
import { utils } from 'ethers'

type Props = {
  selectedTabId: string,
  side: 'BUY' | 'SELL',
  fraction: number,
  priceType: string,
  price: string,
  amount: string,
  maxAmount: string,
  total: string,
  baseToken: string,
  quoteToken: string,
  isOpen: boolean,
  insufficientBalance: boolean,
  loggedIn: boolean,
  onInputChange: Object => void,
  handleChangeOrderType: string => void,
  handleSendOrder: void => void,
  toggleCollapse: (SyntheticEvent<>) => void,
  makeFee: string,
  takeFee: string,
  baseTokenDecimals: number,
  quoteTokenDecimals: number
}

const OrderFormRenderer = (props: Props) => {
  const {
    selectedTabId,
    side,
    fraction,
    priceType,
    price,
    isOpen,
    amount,
    maxAmount,
    total,
    baseToken,
    quoteToken,
    loggedIn,
    onInputChange,
    insufficientBalance,
    handleChangeOrderType,
    handleSendOrder,
    toggleCollapse,
    makeFee,
    takeFee,
    baseTokenDecimals,
    quoteTokenDecimals
  } = props

  return (
    <Wrapper className="order-form">
      <OrderFormHeader>
        <HeaderText text={`${side} ${baseToken}`} />
        <ButtonRow>
          <Button
            text="Limit"
            minimal
            onClick={() => handleChangeOrderType('limit')}
            active={selectedTabId === 'limit'}
            intent={selectedTabId === 'limit' ? 'primary' : ''}
          />
          <Button
            text="Market"
            minimal
            onClick={() => handleChangeOrderType('market')}
            active={selectedTabId === 'market'}
            intent={selectedTabId === 'market' ? 'primary' : ''}
          />
          <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} minimal onClick={toggleCollapse} />
        </ButtonRow>
      </OrderFormHeader>
      <Collapse isOpen={isOpen}>
        <Tabs selectedTabId={selectedTabId}>
          <Tab
            id="limit"
            panel={
              <LimitOrderPanel
                loggedIn={loggedIn}
                side={side}
                baseToken={baseToken}
                quoteToken={quoteToken}
                fraction={fraction}
                priceType={priceType}
                price={price}
                amount={amount}
                maxAmount={maxAmount}
                total={total}
                insufficientBalance={insufficientBalance}
                onInputChange={onInputChange}
                handleSendOrder={handleSendOrder}
                makeFee={makeFee}
                takeFee={takeFee}
                quoteTokenDecimals={quoteTokenDecimals}
                baseTokenDecimals={baseTokenDecimals}
              />
            }
          />
          <Tab
            id="market"
            panel={
              <MarketOrderPanel
                loggedIn={loggedIn}
                side={side}
                baseToken={baseToken}
                quoteToken={quoteToken}
                fraction={fraction}
                priceType={priceType}
                price={price}
                amount={amount}
                maxAmount={maxAmount}
                insufficientBalance={insufficientBalance}
                total={total}
                onInputChange={onInputChange}
                handleSendOrder={handleSendOrder}
                makeFee={makeFee}
                takeFee={takeFee}
                quoteTokenDecimals={quoteTokenDecimals}
                baseTokenDecimals={baseTokenDecimals}
              />
            }
          />
          <Tab
            id="stop"
            panel={
              <StopLimitOrderPanel
                loggedIn={loggedIn}
                side={side}
                baseToken={baseToken}
                quoteToken={quoteToken}
                fraction={fraction}
                priceType={priceType}
                price={price}
                stopPrice={price}
                amount={amount}
                insufficientBalance={insufficientBalance}
                maxAmount={maxAmount}
                total={total}
                onInputChange={onInputChange}
                handleSendOrder={handleSendOrder}
                makeFee={makeFee}
                takeFee={takeFee}
                quoteTokenDecimals={quoteTokenDecimals}
                baseTokenDecimals={baseTokenDecimals}
              />
            }
          />
        </Tabs>
      </Collapse>
    </Wrapper>
  )
}

const MarketOrderPanel = (props: *) => {
  const { 
    side, 
    price, 
    amount, 
    maxAmount, 
    fraction, 
    total, 
    quoteToken, 
    baseToken, 
    onInputChange, 
    insufficientBalance, 
    handleSendOrder, 
    makeFee,
    quoteTokenDecimals
  } = props


  return (
    <React.Fragment>
      <InputBox>
        <InputLabel>
          Price <MutedText>({quoteToken})</MutedText>
        </InputLabel>
        <PriceInputGroup name="price" onChange={onInputChange} placeholder={price} disabled />
      </InputBox>
      <InputBox>
        <InputLabel>Amount <MutedText>({baseToken})</MutedText></InputLabel>
        <PriceInputGroup
          name="amount"
          value={amount}
          placeholder="Amount"
          onChange={onInputChange}
          intent={insufficientBalance ? 'danger' : null}
          rightElement={insufficientBalance ? <Total>Insufficient Balance</Total> : null}
        />
      </InputBox>
      <RadioButtonsWrapper>
        <RadioButton value={25} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={50} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={75} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={100} fraction={fraction} onInputChange={onInputChange} />
        <Flex pl={2} pt={1} >
          <Help position={Position.RIGHT}>
            Select fraction of total possible value you can trade at the currently selected price.
          </Help>
        </Flex>
      </RadioButtonsWrapper>
      { total && <MaxAmount>Total: ~{total} {quoteToken}</MaxAmount> }
      { maxAmount && <MaxAmount>Max: ~{maxAmount} {baseToken}</MaxAmount> }
      { makeFee && <MaxAmount>Fee: {utils.formatUnits(makeFee, quoteTokenDecimals)} {quoteToken}</MaxAmount> }
      <Button intent={side === 'BUY' ? 'success' : 'danger'} text={side} name="order" onClick={handleSendOrder} disabled={insufficientBalance} fill />
    </React.Fragment>
  )
}

const LimitOrderPanel = props => {
  const { 
    price, 
    side, 
    amount, 
    maxAmount, 
    fraction, 
    total, 
    quoteToken, 
    baseToken, 
    onInputChange, 
    insufficientBalance, 
    handleSendOrder, 
    makeFee,
    quoteTokenDecimals,
  } = props

  return (
    <React.Fragment>
      <InputBox>
        <InputLabel>
          Price <MutedText>({quoteToken})</MutedText>
        </InputLabel>
        <PriceInputGroup name="price" onChange={onInputChange} value={price} placeholder="Price" />
      </InputBox>
      <InputBox>
        <InputLabel>
          Amount <MutedText>({baseToken})</MutedText>
        </InputLabel>
        <PriceInputGroup
          name="amount"
          onChange={onInputChange}
          value={amount}
          placeholder="Amount"
          intent={insufficientBalance ? 'danger' : null}
          rightElement={insufficientBalance ? <Total>Insufficient Balance</Total> : null}
        />
      </InputBox>
      <RadioButtonsWrapper>
        <RadioButton value={25} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={50} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={75} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={100} fraction={fraction} onInputChange={onInputChange} />
        <Flex pl={2} pt={1} >
          <Help position={Position.RIGHT}>
            Select fraction of total possible value you can trade at the currently selected price.
          </Help>
        </Flex>
      </RadioButtonsWrapper>
      { total && <MaxAmount>Total: ~{total} {quoteToken}</MaxAmount> }
      { maxAmount && <MaxAmount>Max: ~{maxAmount} {baseToken}</MaxAmount> }
      { makeFee && <MaxAmount> Fee: {utils.formatUnits(makeFee, quoteTokenDecimals)} {quoteToken}</MaxAmount>}
      <Button intent={side === 'BUY' ? 'success' : 'danger'} text={side} name="order" onClick={handleSendOrder} disabled={insufficientBalance} fill />
    </React.Fragment>
  )
}

const StopLimitOrderPanel = (props: *) => {
  const { 
    stopPrice, 
    side, 
    amount, 
    maxAmount, 
    total, 
    quoteToken, 
    baseToken, 
    onInputChange, 
    insufficientBalance, 
    handleSendOrder, 
    makeFee,
    quoteTokenDecimals
    } = props

  return (
    <React.Fragment>
      <InputBox>
        <InputLabel>
          Stop Price <MutedText>({quoteToken})</MutedText>
        </InputLabel>
        <PriceInputGroup name="stopPrice" onChange={onInputChange} value={stopPrice} placeholder="Stop Price" />
      </InputBox>
      <InputBox>
        <InputLabel>
          Limit Price <MutedText>({quoteToken})</MutedText>
        </InputLabel>
        <PriceInputGroup
          name="limitPrice"
          onChange={onInputChange}
          value={amount}
          placeholder="Limit Price"
          intent={insufficientBalance ? 'danger' : null}
          rightElement={insufficientBalance ? <Total>Insufficient Balance</Total> : null}
        />
      </InputBox>
      <InputBox>
        <InputLabel>
          Amount <MutedText>({baseToken})</MutedText>
        </InputLabel>
        <PriceInputGroup
          name="amount"
          onChange={onInputChange}
          value={amount}
          placeholder="Amount"
          rightElement={<Total>Total: ~{total} {quoteToken}</Total>}
        />
      </InputBox>
      <MaxAmount>Total: ~{total} {quoteToken}</MaxAmount>
      <MaxAmount>Max: ~{maxAmount} {baseToken}</MaxAmount>
      <MaxAmount>Fee: {makeFee} {utils.formatUnits(makeFee, quoteTokenDecimals)} {quoteToken} </MaxAmount>
      <Button intent={side === 'BUY' ? 'success' : 'danger'} text={side} name="order" onClick={handleSendOrder} disabled={insufficientBalance} fill />
    </React.Fragment>
  )
}

export default OrderFormRenderer

const RadioButton = props => {
  const { onInputChange, value } = props
  return (
    <RadioButtonBox>
      <span>{value}%</span>
      <InputGroup name="fraction" type="radio" onChange={onInputChange} value={value} />
    </RadioButtonBox>
  )
}

const OrderFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled(Card)`
  min-width: 240px;
`

const ButtonRow = styled.span`
  display: flex;
  justify-content: flex-end;
  & .bp3-button {
    margin-left: 5px;
  }
`
const RadioButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`

const RadioButtonBox = styled(Label)`
  width: 45px;
  height: 30px;
  display: flex;
  margin-left: 10px;
  margin-bottom: 16px;
  background: #27343d;
  text-align: center;
  padding: 4px;
  cursor: pointer;
  border: 1px solid #2584c1;
  box-shadow: none;
  border-radius: 3px;
  input {
    opacity: 0;
    width: 0px;
    margin: 0px;
  }
  .bp3-input-group {
    width: 0px;
  }
`

const PriceInputGroup = styled(InputGroup).attrs({
  className: 'bp3-fill'
})``

const InputBox = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
`

const InputLabel = styled.div`
  height: 100%;
  margin: auto;
  width: 180px;
`

const Total = styled.div`
  color: ${Colors.RED3};
  margin: auto;
  height: 100%;
  padding-top: 8px;
  padding-right: 4px;
`

const MaxAmount = styled.div`
  display: flex;
  color: ${Colors.GRAY3}
  font-size: 11px;
  justify-content: flex-end;
  padding-bottom: 5px;
  `

