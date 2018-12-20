import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TokenBalanceChart from './TokenBalanceChart';

import {
  Card
} from '@blueprintjs/core'

const data = [
  {symbol: 'EOS', balance: 100, value: 400, currency: '$' },
  {symbol: 'WETH', balance: 100, value: 300, currency: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, currency: '$' },
  {symbol: 'ETH', balance: 100, value: 200, currency: '$' },
  {symbol: 'ETH', balance: 100, value: 200, currency: '$' },
  {symbol: 'ETH', balance: 100, value: 200, currency: '$' }
];

storiesOf('TokenBalanceChart', module)
  .addDecorator(withKnobs)
  .add(
    'Buy Orderform',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <TokenBalanceChart tokenBalances={data} />
      </Card>
    ))
  )
