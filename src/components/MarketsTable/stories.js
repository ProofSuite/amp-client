import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import MarketsTableRenderer from './MarketsTableRenderer';
import { Card } from '@blueprintjs/core';

import { mockMarketsTableData } from '../../mockData'

storiesOf('Markets Table', module)
  .addDecorator(withKnobs)

  .add(
    'Markets Table (Default)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <MarketsTableRenderer
          marketsTableData={mockMarketsTableData}
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
    'Markets Table (Provider not connected)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <MarketsTableRenderer
          depositTableData={mockMarketsTableData}
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
