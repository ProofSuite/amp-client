import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import RecentTxTable from './RecentTxTable';
import RecentTxTableRenderer from './RecentTxTableRenderer'
import README from './README.md';
import { LoadData } from '../Common';
import { getTrades } from '../../store/services/api';
import { Card } from '@blueprintjs/core'

const transactions = [
  {
    type: 'APPROVAL',
    hash: 0x1,
    time: 1328908127343,
    status: 'PENDING'
  },
  {
    type: 'TRANSFER',
    hash: 0x2,
    time: 1328908127343,
    status: 'CONFIRMED'
  },
  {
    type: 'TRANSFER',
    hash: 0x2,
    time: 1328908127343,
    status: 'ERROR'
  }
]

storiesOf('RecentTxTable', module)
  .addDecorator(withKnobs)
  .add(
    'Data Loaded',
    withInfo({ text: README, source: false })(() => (
      <LoadData getData={getTrades}>
        {data => (
          <Card className="bp3-dark">
            <RecentTxTableRenderer transactions={transactions} />
          </Card>
        )}
      </LoadData>
    ))
  );
