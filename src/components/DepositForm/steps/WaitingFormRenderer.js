import React from 'react';
import styled from 'styled-components';
import { Button, ControlGroup, Spinner, Callout } from '@blueprintjs/core';
import TokenSuggest from '../../TokenSuggest';

const WaitingFormRenderer = (props: Props) => {
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
        Send Ether to the address display below. This form will update once your account balance is changed.
      </Callout>
      <WaitingFormBox>
        <Spinner intent="primary" large />
        <Address>{address}</Address>
        <CurrentBalanceBox>
          (Your current balance is {balance} {token.symbol})
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

export default WaitingFormRenderer;
