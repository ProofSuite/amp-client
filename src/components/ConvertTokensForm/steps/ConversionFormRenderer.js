import React from 'react';
import styled from 'styled-components';
import { Button, Callout, Checkbox, Icon, Slider } from '@blueprintjs/core';

type Props = {
  address: string,
  balance: ?number,
  fromToken: Token,
  toToken: Token,
  shouldAllow: boolean,
  convertAmount: number,
  handleConvertTokens: void => void,
  handleChangeConvertAmount: number => void,
  toggleShouldAllowTrading: void => void,
  allowTradingCheckboxDisabled: boolean,
  allowTxStatus: string,
  allowTxHash: string,
  allowTxReceipt: TxReceipt,
  convertTxStatus: string,
  convertTxHash: string,
  convertTxReceipt: TxReceipt,
  transactionStatus: string,
};

const ConversionStepRenderer = (props: Props) => {
  const {
    shouldAllow,
    toggleShouldAllowTrading,
    handleConvertTokens,
    handleChangeConvertAmount,
    convertAmount,
    balance,
    fromToken,
  } = props;

  return (
    <div>
      <Callout intent="success" title={messages[fromToken].title}>
        {messages[fromToken].callout}
      </Callout>
      <EtherBalanceBox>
        <p>Your total wallet balance is currently:</p>
        <h1>{balance} {fromToken.symbol}</h1>
      </EtherBalanceBox>
      <p>{messages[fromToken].label1}</p>
      <SliderBox>
        <Slider
          max={100}
          min={0}
          onChange={handleChangeConvertAmount}
          value={convertAmount}
          labelStepSize={25}
        />
      </SliderBox>
      <p><Icon intent="warning" icon="warning-sign" /> {messages[fromToken].info1}</p>
      <br />
      <Checkbox
        checked={shouldAllow}
        label={"Allow Trading"}
        onChange={toggleShouldAllowTrading}
      />
      <p><Icon intent="warning" icon="warning-sign" /> {messages[fromToken].info2}</p>
      <Button
        intent="primary"
        onClick={handleConvertTokens}
        text="Convert"
        large
        fill
      />
    </div>
  );
};

const messages = {
  "ETH": {
    title: `Tokenize your Ether for trading!`,
    callout: `To be able to trade on the AMP platform, you will need to convert you Ether (ETH) to tokenized ether (WETH).
    ETH and WETH can be converted at anytime through a smart-contract and 1 ETH = 1 WETH consistently. To perform other normal blockchain transactions, you will need Ether to pay for gas. Therefore
    we recommend tokenizing around 90% of your ETH`,
    label1: `Choose the fraction of ETH you want to tokenize.`,
    info1: `WETH is reequired for trading. You can convert back to ETH at any time. Read more about WETH here`,
    info2: 'Required for trading',
  },
  "WETH": {
    title: `Convert back to Ether`,
    callout: `To be able to trade on the AMP platform, you will need to convert you Ether (ETH) to tokenized ether (WETH). ETH and WETH can be converted at anytime through a smart-contract and 1 ETH = 1 WETH consistently`,
    label1: `Choose the fraction of WETH (tokenized Ether) you want to convert to ETH`,
    info1: `WETH is reequired for trading. You can convert between WETH (tokenized ether) and ETH at any time. Read more about WETH here`,
    info2: 'Required for trading',
  },
};

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

export default ConversionStepRenderer;
