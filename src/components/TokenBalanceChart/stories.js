import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TokenBalanceChart from './TokenBalanceChart';

const data = [{symbol: 'EOS', value: 400}, {symbol: 'WETH', value: 300},
                  {symbol: 'ZRX', value: 300}, {symbol: 'ETH', value: 200}];

storiesOf('TokenBalanceChart', module)
  .addDecorator(withKnobs)
  .add(
    'Buy Orderform',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <TokenBalanceChart tokenBalances={data} />
      </div>
    ))
  )
