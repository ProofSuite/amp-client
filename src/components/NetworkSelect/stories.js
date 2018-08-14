import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import NetworkSelect from './NetworkSelect';
import README from './README.md';

const networks = [
  { name: 'Mainnet', id: 1 },
  { name: 'Ropsten', id: 3 },
  { name: 'Rinkeby', id: 4 },
  { name: 'Private', id: 1000 },
  { name: 'Private', id: 8888 },
].map((m, index) => ({ ...m, rank: index + 1 }));

storiesOf('NetworkSelect', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <NetworkSelect networks={networks} handleChange={action('handleChange')} networkId={1} />
      </div>
    ))
  );
