import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import PieChart from './PieChart';

import {
  Card
} from '@blueprintjs/core'

const data = [
  {symbol: 'EOS', balance: 100, value: 400, unit: '$' },
  {symbol: 'WETH', balance: 100, value: 300, unit: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' }
];

storiesOf('PieChart', module)
  .addDecorator(withKnobs)
  .add(
    'TokenB Balance Chart',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <PieChart balances={data} />
      </Card>
    ))
  )
