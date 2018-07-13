// @flow
import React from 'react';
import styled from 'styled-components';
import { Callout, Spinner, Checkbox, Slider, Button, ControlGroup, FormGroup, Label } from '@blueprintjs/core';

import TokenSuggest from '../TokenSuggest';

type Props = {
  step: 'waiting' | 'convert',
  address: string,
  balance: ?number,
  tokens: Array<Object>,
  token: Object,
  showConvert: boolean,
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  toggleShouldConvert: void => void,
  toggleTokenSuggest: void => void,
  showTokenSuggest: boolean,
  handleChangeToken: (SyntheticEvent<>) => void,
  handleSubmitChangeToken: (SyntheticEvent<>) => void,
  handleConfirm: (SyntheticEvent<>) => void,
};

const ReceiveEtherFormRenderer = (props: Props) => {
  switch (props.step) {
    case 'waiting':
      return renderWaitingForm(props);
    case 'convert':
      return renderConversionForm(props);
    default:
      return null;
  }
};

const renderWaitingForm = (props: Props) => {
  const {
    tokens,
    token,
    address,
    balance,
    handleChangeToken,
    handleSubmitChangeToken,
    toggleTokenSuggest,
    showTokenSuggest,
  } = props;

  return (
    <div>
      <Callout intent="primary" title="Notice">
        Send Ether to the address display below or click <em>here</em> to deposit another token. This form will update
        once your account balance is changed.
      </Callout>
      <WaitingFormBox>
        <Spinner intent="primary" large />
        <Address>{address}</Address>
        <CurrentBalanceBox>
          (Your current balance is {balance} {token.name})
        </CurrentBalanceBox>
      </WaitingFormBox>

      {showTokenSuggest ? (
        <ControlGroup>
          <Button onClick={toggleTokenSuggest} text="Cancel" minimal />
          <TokenSuggest tokens={tokens} token={token} onChange={handleChangeToken} />
          <Button intent="primary" text="Confirm" onClick={handleSubmitChangeToken} />
        </ControlGroup>
      ) : (
        <ControlGroup>
          <Button onClick={toggleTokenSuggest} text="Deposit another token" />
        </ControlGroup>
      )}
    </div>
  );
};

const renderConversionForm = (props: Props) => {
  const { shouldAllow, toggleShouldAllowTrading, handleConfirm, showConvert, balance } = props;

  return (
    <div>
      <Callout intent="success" title="Deposit Received">
        Please read the instructions below carefully in order to understand how to use the AMP platform.
      </Callout>
      <EtherBalanceBox>
        <p>Your total wallet balance is currently:</p>
        <h1>{balance}</h1>
      </EtherBalanceBox>
      {showConvert && renderSliderBox(props)}
      <br />
      <Checkbox checked={shouldAllow} label="Allow Trading" onChange={toggleShouldAllowTrading} />
      <p>This is required for trading. Read more about allowing trading here</p>
      <Button intent="primary" fill onClick={handleConfirm} text="Confirm" large />
    </div>
  );
};

const renderSliderBox = (props: Props) => {
  const { shouldConvert, toggleShouldConvert, handleChangeConvertAmount, convertAmount } = props;

  return (
    <div>
      <Checkbox checked={shouldConvert} label="Convert to Wrapper Ether" onChange={toggleShouldConvert} />
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
  );
};

const WaitingFormBox = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const CurrentBalanceBox = styled.div`
  padding-top: 4px;
`;

const Address = styled.div`
  padding-top: 40px;
  font-weight: bold;
`;

const EtherBalanceBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderBox = styled.div`
  width: 430px;
`;

export default ReceiveEtherFormRenderer;
