// @flow
import React from 'react'
import { Tabs, Tab, Card, Button, InputGroup, Label, Colors, Collapse } from '@blueprintjs/core'
import { HeaderText, MutedText } from '../Common'
import styled from 'styled-components'

type Props = {
  selectedTabId: string,
  side: 'BUY' | 'SELL',
  fraction: number,
  priceType: string,
  price: string,
  stopPrice: string,
  limitPrice: string,
  amount: string,
  total: string,
  baseToken: string,
  quoteToken: string,
  isOpen: boolean,
  loggedIn: boolean,
  onInputChange: Object => void,
  handleChangeOrderType: string => void,
  toggleCollapse: (SyntheticEvent<>) => void,
  handleSubmit: (SyntheticEvent<>) => void
}

const OrderFormRenderer = (props: Props) => {
  const {
    selectedTabId,
    side,
    fraction,
    priceType,
    price,
    stopPrice,
    limitPrice,
    isOpen,
    amount,
    total,
    baseToken,
    quoteToken,
    loggedIn,
    onInputChange,
    handleChangeOrderType,
    toggleCollapse,
    handleSubmit
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
                stopPrice={stopPrice}
                limitPrice={limitPrice}
                amount={amount}
                total={total}
                onInputChange={onInputChange}
                handleSubmit={handleSubmit}
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
                stopPrice={stopPrice}
                limitPrice={limitPrice}
                amount={amount}
                total={total}
                onInputChange={onInputChange}
                handleSubmit={handleSubmit}
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
                stopPrice={stopPrice}
                limitPrice={limitPrice}
                amount={amount}
                total={total}
                onInputChange={onInputChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Tabs>
      </Collapse>
    </Wrapper>
  )
}

const MarketOrderPanel = (props: *) => {
  const { side, loggedIn, price, amount, fraction, total, quoteToken, baseToken, onInputChange } = props

  return (
    <React.Fragment>
      <InputBox>
        <InputLabel>
          Price <MutedText>({quoteToken})</MutedText>
        </InputLabel>
        <PriceInputGroup name="price" onChange={onInputChange} placeholder={price} disabled />
      </InputBox>
      <InputBox>
        <InputLabel>
          Amount <MutedText>({baseToken})</MutedText>
        </InputLabel>
        <PriceInputGroup
          name="amount"
          value={amount}
          placeholder="Amount"
          onChange={onInputChange}
          rightElement={
            <Total>
              Total: ~{total} {quoteToken}
            </Total>
          }
        />
      </InputBox>
      <RadioButtonsWrapper>
        <RadioButton value={25} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={50} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={75} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={100} fraction={fraction} onInputChange={onInputChange} />
      </RadioButtonsWrapper>
      {loggedIn ? (
        <Button intent={side === 'BUY' ? 'success' : 'danger'} text={side} name="order" onClick={onInputChange} fill />
      ) : (
        <Button large intent="primary" text="Login" />
      )}
    </React.Fragment>
  )
}

const LimitOrderPanel = props => {
  const { price, side, amount, loggedIn, fraction, total, quoteToken, baseToken, onInputChange } = props

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
          rightElement={
            <Total>
              Total: ~{total} {quoteToken}
            </Total>
          }
        />
      </InputBox>
      <RadioButtonsWrapper>
        <RadioButton value={25} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={50} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={75} fraction={fraction} onInputChange={onInputChange} />
        <RadioButton value={100} fraction={fraction} onInputChange={onInputChange} />
      </RadioButtonsWrapper>
      {loggedIn ? (
        <Button intent={side === 'BUY' ? 'success' : 'danger'} text={side} onClick={onInputChange} name="order" fill />
      ) : (
        <Button large intent="primary" text="Login" fill />
      )}
    </React.Fragment>
  )
}

const StopLimitOrderPanel = (props: *) => {
  const { stopPrice, side, loggedIn, amount, total, quoteToken, baseToken, onInputChange } = props

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
          rightElement={
            <Total>
              Total: ~{total} {baseToken}
            </Total>
          }
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
          rightElement={
            <Total>
              Total: ~{total} {quoteToken}
            </Total>
          }
        />
      </InputBox>
      {loggedIn ? (
        <Button intent={side === 'BUY' ? 'success' : 'danger'} name="order" onClick={onInputChange} text={side} fill />
      ) : (
        <Button large intent="primary" text="Login" />
      )}
    </React.Fragment>
  )
}

export default OrderFormRenderer

const RadioButton = props => {
  const { onInputChange, value } = props
  return (
    <Box>
      {value}%
      <InputGroup name="fraction" type="radio" onChange={onInputChange} value={value} />
    </Box>
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

const Box = styled(Label)`
  width: 45px;
  height: 30px;
  display: flex;
  margin-left: 10px;
  margin-bottom: 16px;
  background: #27343d;
  text-align: center;
  padding: 8px 0;
  justify-content: center;
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
  color: ${Colors.GRAY3};
  margin: auto;
  height: 100%;
  padding-top: 8px;
  padding-right: 4px;
`
