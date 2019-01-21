import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import StatisticsBoardRenderer from './StatisticsBoardRenderer';

import {
  Card
} from '@blueprintjs/core'

//Counts
const tradeCountsByToken = [
  {symbol: 'EOS', balance: 100, value: 400, unit: 'trades' },
  {symbol: 'WETH', balance: 100, value: 300, unit: 'trades' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: 'trades' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'trades' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'trades' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'trades' }
];

const orderCountsByToken = [
  {symbol: 'EOS', balance: 100, value: 400, unit: 'orders' },
  {symbol: 'WETH', balance: 100, value: 300, unit: 'orders' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: 'orders' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'orders' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'orders' },
  {symbol: 'ETH', balance: 100, value: 200, unit: 'orders' }
]

const tradeCountsByPair = [
  {symbol: 'EOS/USDC', balance: 100, value: 400, unit: 'trades' },
  {symbol: 'WETH/USDC', balance: 100, value: 300, unit: 'trades' },
  {symbol: 'ZRX/DAI', balance: 100, value: 300, unit: 'trades' },
  {symbol: 'ETH/DAI', balance: 100, value: 200, unit: 'trades' },
  {symbol: 'ETH/WETH', balance: 100, value: 200, unit: 'trades' },
  {symbol: 'ETH/WETH', balance: 100, value: 200, unit: 'trades' }
]

const orderCountsByPair = [
  {symbol: 'EOS/USDC', balance: 100, value: 400, unit: 'orders' },
  {symbol: 'WETH/USDC', balance: 100, value: 300, unit: 'orders' },
  {symbol: 'ZRX/DAI', balance: 100, value: 300, unit: 'orders' },
  {symbol: 'ETH/DAI', balance: 100, value: 200, unit: 'orders' },
  {symbol: 'ETH/WETH', balance: 100, value: 200, unit: 'orders' },
  {symbol: 'ETH/WETH', balance: 100, value: 200, unit: 'orders' }
]


//Values
const tradeValuesByToken = [
  {symbol: 'EOS', balance: 100, value: 400, unit: '$' },
  {symbol: 'WETH', balance: 100, value: 300, unit: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' }
];

const orderValuesByToken = [
  {symbol: 'EOS', balance: 100, value: 400, unit: '$' },
  {symbol: 'WETH', balance: 100, value: 300, unit: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' }
]

const tradeValuesByPair = [
  {symbol: 'EOS/', balance: 100, value: 400, unit: '$' },
  {symbol: 'WETH', balance: 100, value: 300, unit: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' }
]

const orderValuesByPair = [
  {symbol: 'EOS', balance: 100, value: 400, unit: '$' },
  {symbol: 'WETH', balance: 100, value: 300, unit: '$' },
  {symbol: 'ZRX', balance: 100, value: 300, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' },
  {symbol: 'ETH', balance: 100, value: 200, unit: '$' }
]


storiesOf('StatisticsBoard', module)
  .addDecorator(withKnobs)
  .add(
    'Statistics Board Renderer',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <StatisticsBoardRenderer
            mostTradedToken="USDC"
            mostTradedPair="USDC/WETH"
            biggestWinners={["WETH", "PRFT"]}
            biggestLosers={["ZRX", "AUR"]}
            transactionSuccessPercentage={0.99}
            totalBuyValue={1000}
            totalSellValue={2000}
            total24HVolume={234}
            totalOrderVolume={234}
            numberOfTrades={223}
            numberOfOrders={234}
            numberOfSells={123}
            numberOfBuys={100}
            currency="$"
            tradeCountsByToken={tradeCountsByToken}
            orderCountsByToken={orderCountsByToken}
            tradeCountsByPair={tradeCountsByPair}
            orderCountsByPair={orderCountsByPair}
            tradeValuesByToken={tradeValuesByToken}
            orderValuesByToken={orderValuesByToken}
            tradeValuesByPair={tradeValuesByPair}
            orderValuesByPair={orderValuesByPair}
        />
      </Card>
    ))
  )
