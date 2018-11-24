import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from '@blueprintjs/core';
import { receipt } from '../../utils/mockData';
import SmallTxNotification from './SmallTxNotification';

storiesOf('SmallSmallTxNotification', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => (
      <SmallTxNotification loading={false} error="" hash={receipt.hash} receipt={receipt} status="" />
    ))
  )
  .add(
    'Valid',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="valid"
            gas={21000}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Invalid',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification
            loading={false}
            hash={null}
            receipt={null}
            status="invalid"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Pending',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification loading={false} hash={receipt.hash} receipt={receipt} status="sent" statusMessage="" />
        </Card>
      </div>
    ))
  )
  .add(
    'Confirmed',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="confirmed"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Reverted',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification
            loading={false}
            hash={receipt.hash}
            receipt={receipt}
            status="reverted"
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Error',
    withInfo({ source: false })(() => (
      <div className="bp3-dark">
        <Card>
          <SmallTxNotification
            message="Unknown error"
            status="error"
          />
        </Card>
      </div>
    ))
  );
