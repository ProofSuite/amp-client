import React from 'react';
import README from './README.md';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';

import { tokens } from '../../data';
import configureStore from '../../store/configureStore';
import {
  mockAddress,
  mockFailedTxReceipt,
  mockFailedTxReceipt2,
  mockHash,
  mockHash2,
  mockTxReceipt,
  mockTxReceipt2,
} from '../../mockData';

import DepositFormContainer from './index.js';
import DepositFormRenderer from './DepositFormRenderer';

const { store: customStore } = configureStore({
  account: {
    address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  },
  depositForm: {
    step: 'convert',
  },
});

const { store: customStore2 } = configureStore({
  account: {
    address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  },
  depositForm: {
    step: 'confirm',
  },
});

storiesOf('Deposit Form', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Deposit Ether/Tokens Form',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormContainer />
        </Card>
      </div>
    ))
  )
  .add(
    'Connected Convert Ether/Tokens Form (Ether)',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormContainer />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Waiting for deposit)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="waiting"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
            shouldConvert
            shouldAllow
            convertAmount={90}
            isEtherDeposit
            allowTradingCheckboxDisabled={false}
            submitButtonDisabled={false}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            receipt={null}
            hash={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Waiting for conversion - Ether)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="convert"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
            showTokenSuggest
            shouldConvert
            shouldAllow
            convertAmount={90}
            isEtherDeposit
            allowTradingCheckboxDisabled={false}
            submitButtonDisabled={false}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            receipt={null}
            hash={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Convert - Ether - No Conversion)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="convert"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
            shouldConvert={false}
            shouldAllow={false}
            showConvert={false}
            convertAmount={90}
            isEtherDeposit
            allowTradingCheckboxDisabled={false}
            submitButtonDisabled
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            receipt={null}
            hash={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Conversion - Token)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="convert"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert={false}
            convertAmount={90}
            isEtherDeposit={false}
            allowTradingCheckboxDisabled={false}
            submitButtonDisabled={false}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            receipt={null}
            hash={null}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Confirm - Ether)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="confirm"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert
            convertAmount={90}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            receipt={mockTxReceipt}
            hash={mockHash}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Confirm - Pending Transaction)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="confirm"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert={false}
            convertAmount={90}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            convertTxStatus="sent"
            convertTxHash={mockHash}
            convertTxReceipt={mockTxReceipt}
            allowTxStatus="sent"
            allowTxHash={mockHash2}
            allowTxReceipt={mockTxReceipt2}
            transactionStatus="sent"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Confirm - Transaction Failed)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="confirm"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert={false}
            convertAmount={90}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            convertTxStatus="reverted"
            convertTxHash={mockHash}
            convertTxReceipt={mockFailedTxReceipt}
            allowTxStatus="reverted"
            allowTxHash={mockHash2}
            allowTxReceipt={mockFailedTxReceipt2}
            transactionStatus="failed"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Confirm - Transactions Failed/Pending)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="confirm"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert={false}
            convertAmount={90}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            convertTxStatus="reverted"
            convertTxHash={mockHash}
            convertTxReceipt={mockTxReceipt}
            allowTxStatus="sent"
            allowTxHash={mockHash2}
            allowTxReceipt={mockFailedTxReceipt2}
            transactionStatus="sent"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Confirm - Transaction Successfull)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <DepositFormRenderer
            step="confirm"
            address={mockAddress}
            balance={1.54}
            tokens={tokens}
            token={tokens[1]}
            shouldConvert
            shouldAllow
            showConvert={false}
            convertAmount={90}
            handleChangeConvertAmount={action('handleChangeConvertAmount')}
            toggleShouldAllowTrading={action('toggleShouldAllowTrading')}
            toggleShouldConvert={action('toggleShouldConvert')}
            toggleTokenSuggest={action('toggleTokenSuggest')}
            showTokenSuggest
            handleChangeToken={action('handleChangeToken')}
            handleSubmitChangeToken={action('handleSubmitChangeToken')}
            handleConfirm={action('handleConfirm')}
            convertTxStatus="confirmed"
            convertTxHash={mockHash}
            convertTxReceipt={mockTxReceipt}
            allowTxStatus="confirmed"
            allowTxHash={mockHash2}
            allowTxReceipt={mockTxReceipt2}
            transactionStatus="confirmed"
          />
        </Card>
      </div>
    ))
  );
