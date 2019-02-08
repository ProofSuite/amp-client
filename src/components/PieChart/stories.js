// @flow
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

const colors = ["#FFE39F", "#EEDE9F", "#DEDA9F", "#CDD59E", "#BECF9C", "#AECA99", "#9FC596", "#91BF91", "#83B98C", "#76B387", "#69AD80", "#5DA779", "#51A171", "#479A69", "#3D945F", "#358E55", "#2D874B", "#27803F", "#217A32", "#1D7324"]

storiesOf('PieChart', module)
  .addDecorator(withKnobs)
  .add(
    'Token Balance Chart',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <PieChart data={data} loading={false} unit={'$'} colors={colors} />
      </Card>
    ))
  )
