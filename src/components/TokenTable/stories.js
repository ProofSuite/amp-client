import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import TokenTableRenderer from './TokenTableRenderer';
import { Card } from '@blueprintjs/core';

import { mockDepositTableData } from '../../mockData'

storiesOf('Deposit Table', module)
  .addDecorator(withKnobs)

  .add(
    'Deposit Table (Default)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <TokenTableRenderer
          tokenTableData={mockDepositTableData}
          searchInput={""}
          connected={true}
          handleSearchInputChange={action('handleSearchInputChange')}
          hideZeroBalanceToken={action('hideZeroBalanceToken')}
          openDepositModal={action('openDepositModal')}
          openSendModal={action('openSendModal')}
          toggleAllowance={action('toggleAllowance')}
          toggleZeroBalanceToken={action('toggleZeroBalanceToken')}
          redirectToTradingPage={action('redirectToTradingPage')}
           />
      </Card>
    ))
  )
  .add(
    'Deposit Table (Provider not connected)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <TokenTableRenderer
          tokenTableData={mockDepositTableData}
          searchInput={""}
          connected={false}
          handleSearchInputChange={action('handleSearchInputChange')}
          hideZeroBalanceToken={action('hideZeroBalanceToken')}
          openDepositModal={action('openDepositModal')}
          openSendModal={action('openSendModal')}
          toggleAllowance={action('toggleAllowance')}
          toggleZeroBalanceToken={action('toggleZeroBalanceToken')}
          redirectToTradingPage={action('redirectToTradingPage')}
           />
      </Card>
    ))
  );
