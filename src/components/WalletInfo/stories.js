import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import WalletInfoRenderer from './WalletInfoRenderer';
import WalletInfo from './WalletInfo';
import { Card } from '@blueprintjs/core';

storiesOf('Wallet Info', module)
  .addDecorator(withKnobs)
  .add(
    'Wallet Info (Default)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfo 
            accountAddress="0x1" 
            etherBalance="0x2" 
            gasPrice={10000} 
            gas={100} />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfoRenderer 
            accountAddress="0x1"
            etherBalance="0x2"
            gasPrice={10000} 
            gas={100} 
        />
      </Card>
    ))
  );
