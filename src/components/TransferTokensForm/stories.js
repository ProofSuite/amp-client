import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import TransferTokensFormContainer from './index.js';
import TransferTokensFormRenderer from './TransferTokensFormRenderer';
import TransferTokensForm from './TransferTokensForm';
import { Card } from '@blueprintjs/core';
import { receipt, receiver, tokens } from '../../utils/mockData';
import README from './README.md';

storiesOf('Send Ether/Tokens Form', module)
  .addDecorator(withKnobs)
  .add(
    'Connected Send Ether/Tokens Form',
    withInfo({
      text: README,
      propTablesExclude: [TransferTokensFormContainer],
      source: false,
    })(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormContainer />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Form',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensForm
            token={tokens[0]}
            tokens={tokens}
            loading={false}
            error=""
            status="valid"
            statusMessage="Transaction is valid"
            gas="21000"
            gasPrice="100000"
            hash="0x7379944c48520639ed73f8cbad1a922cbf15fb44db7f109ba1fca40d6c483d9e"
            receipt={receipt}
            validateEtherTx={action('validateEtherTx')}
            validateTransferTokensTx={action('validateTransferTokensTx')}
            sendEtherTx={action('sendEtherTx')}
            sendTransferTokensTx={action('sendTransferTokensTx')}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Renderer (Transaction Confirmed)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormRenderer
            loading={false}
            error=""
            status="confirmed"
            statusMessage="Transaction is valid"
            gas="21000"
            gasPrice="100000"
            hash={receipt.hash}
            receipt={receipt}
            tokens={tokens}
            token={tokens[0]}
            amount={100000}
            receiver={receiver}
            handleChange={action('handleChange')}
            handleTokenChange={action('handleTokenChange')}
            handleSubmit={action('handleSubmit')}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Renderer (Transaction Sent)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormRenderer
            loading={false}
            status="pending"
            statusMessage=""
            gas="21000"
            gasPrice="100000"
            hash={receipt.hash}
            receipt={null}
            tokens={tokens}
            token={tokens[0]}
            amount={100000}
            receiver={receiver}
            handleChange={action('handleChange')}
            handleTokenChange={action('handleTokenChange')}
            handleSubmit={action('handleSubmit')}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Renderer (Transaction Valid)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormRenderer
            loading={false}
            error=""
            status="valid"
            statusMessage="Transaction is valid"
            gas="21000"
            gasPrice="100000"
            hash=""
            receipt={null}
            tokens={tokens}
            token={tokens[0]}
            amount={100000}
            receiver={receiver}
            handleChange={action('handleChange')}
            handleTokenChange={action('handleTokenChange')}
            handleSubmit={action('handleSubmit')}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Renderer (Transaction Invalid)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormRenderer
            loading={false}
            status="invalid"
            statusMessage="Invalid JSON Response"
            gas="21000"
            gasPrice="100000"
            hash=""
            receipt={null}
            tokens={tokens}
            token={tokens[0]}
            amount={100000}
            receiver={receiver}
            handleChange={action('handleChange')}
            handleTokenChange={action('handleTokenChange')}
            handleSubmit={action('handleSubmit')}
          />
        </Card>
      </div>
    ))
  )
  .add(
    'Send Ether/Tokens Renderer (Transaction Reverted)',
    withInfo()(() => (
      <div className="bp3-dark">
        <Card>
          <TransferTokensFormRenderer
            loading={false}
            status="reverted"
            statusMessage=""
            gas="21000"
            gasPrice="100000"
            hash={receipt.hash}
            receipt={receipt}
            tokens={tokens}
            token={tokens[0]}
            amount={100000}
            receiver={receiver}
            handleChange={action('handleChange')}
            handleTokenChange={action('handleTokenChange')}
            handleSubmit={action('handleSubmit')}
          />
        </Card>
      </div>
    ))
  );
