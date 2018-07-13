import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ReceiveEtherFormRenderer from './ReceiveEtherFormRenderer';
import ReceiveEtherFormContainer from './index.js';
import { Card } from '@blueprintjs/core';
import { tokens } from '../../data';
import README from './README.md';

storiesOf('Receive Ether/Tokens Form', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Receive Ether/Tokens Form',
    withInfo({
      text: README,
      source: false,
    })(() => (
      <div className="pt-dark">
        <Card>
          <ReceiveEtherFormContainer
            step="waiting"
            address="0xc73eec564e96e6653943d6d0e32121d455917653"
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
          />
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
          <ReceiveEtherFormContainer
            step="convert"
            address="0xc73eec564e96e6653943d6d0e32121d455917653"
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
          />
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
      <div className="pt-dark">
        <Card>
          <ReceiveEtherFormContainer
            step="convert"
            address="0xc73eec564e96e6653943d6d0e32121d455917653"
            balance={1.54}
            tokens={tokens}
            token={tokens[0]}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Receive Ether/Tokens Form (Conversion)',
    withInfo()(() => (
      <div className="pt-dark">
        <Card>
          <ReceiveEtherFormRenderer
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
