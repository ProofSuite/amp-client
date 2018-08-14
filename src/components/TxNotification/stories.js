import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';
import { receipt } from '../../data';
import TxNotification from './TxNotification';
import README from './README.md';

storiesOf('TxNotification', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ text: README, source: false })(() => (
      <TxNotification loading={false} error="" hash={receipt.hash} receipt={receipt} status="" />
    ))
  )
  .add(
    'Valid',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="valid"
            statusMessage="Transaction Valid"
            gas={21000}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Invalid',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification
            loading={false}
            hash={null}
            receipt={null}
            status="invalid"
            statusMessage="Invalid JSON response"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Pending',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification loading={false} hash={receipt.hash} receipt={receipt} status="sent" statusMessage="" />
        </Card>
      </div>
    ))
  )
  .add(
    'Confirmed',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="confirmed"
            statusMessage="Transaction Confirmed"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Reverted',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="reverted"
            statusMessage="The transaction has been reverted"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Error',
    withInfo({ text: README, source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <TxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="error"
            statusMessage="Some weird error happened"
          />
        </Card>
      </div>
    ))
  );
