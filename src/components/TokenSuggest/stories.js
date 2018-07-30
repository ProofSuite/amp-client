// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { tokens } from '../../data';
import TokenSuggest from './TokenSuggest';

storiesOf('TokenSuggest', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => <TokenSuggest tokens={tokens} token={tokens[0]} onChange={action('onChange')} />)
  )
  .add(
    'Dark Theme',
    withInfo({ source: false })(() => (
      <div className="pt-dark">
        <TokenSuggest tokens={tokens} token={tokens[0]} onChange={action('onChange')} />
      </div>
    ))
  );
