import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import DepositFormRenderer from './DepositFormRenderer';
import DepositFormContainer from './index.js';
import { Card } from '@blueprintjs/core';
import { tokens } from '../../data';
import README from './README.md';
import { createStore } from '../../store';
import { Provider } from 'react-redux';

const store = createStore({
  account: {
    address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
  },
  depositForm: {
    step: 'convert',
  },
});

storiesOf('Deposit Ether/Tokens Form', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Deposit Ether/Tokens Form',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <div className="pt-dark">
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
      <div className="pt-dark">
        <Card>
          <DepositFormContainer />
        </Card>
      </div>
    ))
  )
  .add(
    'Connected Convert Ether/Tokens Form (Other Tokens)',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <Provider store={store}>
        <div className="pt-dark">
          <Card>
            <DepositFormContainer />
          </Card>
        </div>
      </Provider>
    ))
  )
  .add(
    'Deposit Ether/Tokens Form (Conversion)',
    withInfo()(() => (
      <div className="pt-dark">
        <Card>
          <DepositFormRenderer
            step="convert"
            token={tokens[0]}
            tokens={tokens}
            shouldConvert={true}
            shouldAllow={true}
            amountToConvert={90}
            handleChangeToken={action('handleChangeToken')}
            handleChangeAllowTrading={action('handleChangeAllowTrading')}
            handleChangeAmountToConvert={action('handleChangeAmountToConvert')}
            handleConfirm={action('handleConfirm')}
            showTokenSuggest={action('showChangeTokenInput')}
            toggleTokenSuggest={action}
          />
        </Card>
      </div>
    ))
  );
