// @flow
import React from 'react';
import { Tabs, Tab, Card, Button, FormGroup, InputGroup, Label, Colors } from '@blueprintjs/core';
import { HeaderText, MutedText } from '../Common';
import styled from 'styled-components';

type Props = {
  selectedTabId: string,
  formType: 'Buy' | 'Sell',
  portion: number,
  priceType: string,
  price: string,
  stopPrice: string,
  limitPrice: string,
  amount: string,
  total: string,
  baseToken: string,
  quoteToken: string,
  loggedIn: boolean,
  onInputChange: Object => void,
  handleChangeOrderType: string => void,
  handleSubmit: (SyntheticEvent<>) => void,
};

const OrderFormRenderer = (props: Props) => {
  const {
    selectedTabId,
    formType,
    portion,
    priceType,
    price,
    stopPrice,
    limitPrice,
    amount,
    total,
    baseToken,
    quoteToken,
    loggedIn,
    onInputChange,
    handleChangeOrderType,
    handleSubmit,
  } = props;

  return (
    <Card className="order-form">
      <OrderFormHeader>
        <HeaderText text={`${formType} ${baseToken}`} />
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
          {/* <Button
            text='Stop'
            minimal
            onClick={() => handleChangeOrderType('stop')}
            active={selectedTabId === 'stop'}
            intent={selectedTabId === 'stop' ? 'primary' : '' }
          /> */}
        </ButtonRow>
      </OrderFormHeader>
      <Tabs selectedTabId={selectedTabId}>
        <Tab
          id="limit"
          panel={
            <LimitOrderPanel
              loggedIn={loggedIn}
              formType={formType}
              baseToken={baseToken}
              quoteToken={quoteToken}
              portion={portion}
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
              formType={formType}
              baseToken={baseToken}
              quoteToken={quoteToken}
              portion={portion}
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
              formType={formType}
              baseToken={baseToken}
              quoteToken={quoteToken}
              portion={portion}
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
    </Card>
  );
};

const MarketOrderPanel = (props: *) => {
  const { formType, loggedIn, price, amount, portion, total, quoteToken, baseToken, onInputChange } = props;

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
      <FormGroup className="radio-btns-container">
        <div className="pt-input-group radio-buttons">
          <RadioButton value={25} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={50} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={75} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={100} portion={portion} onInputChange={onInputChange} />
        </div>
      </FormGroup>
      {loggedIn ? (
        <Button string="submit" intent={formType === 'Buy' ? 'success' : 'danger'} text={formType} fill />
      ) : (
        <Button string="button" large={true} intent="primary" text="Login" />
      )}
    </React.Fragment>
  );
};

const LimitOrderPanel = props => {
  const { price, formType, amount, loggedIn, portion, total, quoteToken, baseToken, onInputChange } = props;

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
      <FormGroup className="radio-btns-container">
        <div className="pt-input-group radio-buttons">
          <RadioButton value={25} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={50} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={75} portion={portion} onInputChange={onInputChange} />
          <RadioButton value={100} portion={portion} onInputChange={onInputChange} />
        </div>
      </FormGroup>
      {loggedIn ? (
        <Button string="submit" intent={formType === 'Buy' ? 'success' : 'danger'} text={formType} fill />
      ) : (
        <Button string="button" large={true} intent="primary" text="Login" fill />
      )}
    </React.Fragment>
  );
};

const StopLimitOrderPanel = (props: *) => {
  const { stopPrice, formType, loggedIn, amount, total, quoteToken, baseToken, onInputChange } = props;

  return (
    <div className="column">
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
        <Button intent={formType === 'Buy' ? 'success' : 'danger'} text={formType} fill />
      ) : (
        <Button string="button" large={true} intent="primary" text="Login" />
      )}
    </div>
  );
};

export default OrderFormRenderer;

const RadioButton = props => {
  const { onInputChange, value, portion } = props;
  return (
    <Label className={portion === value ? 'box active-box' : 'box'}>
      {value}%
      <InputGroup name="portion" type="radio" onChange={onInputChange} value={value} />
    </Label>
  );
};

const OrderFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonRow = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const PriceInputGroup = styled(InputGroup).attrs({
  className: 'pt-fill',
})``;

const InputBox = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const InputLabel = styled.div`
  height: 100%;
  margin: auto;
  width: 180px;
`;

const Total = styled.div`
  color: ${Colors.GRAY3};
  margin: auto;
  height: 100%;
  padding-top: 8px;
  padding-right: 4px;
`;
