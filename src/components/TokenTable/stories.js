import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Card } from '@blueprintjs/core';

import TokenTableRenderer from './TokenTableRenderer';

const ETHTokenData = { symbol: 'ETH', balance: 19.0000, value: 0.45, allowed: false, decimals: 18, quote: false, listed: true, quote: false  }
const WETHTokenData = { symbol: 'WETH', balance: 10.0000, value: 6.56, allowed: true, decimals: 18, quote: false, listed: true, quote: false  }

const baseTokensData = [
  { symbol: 'ZRX', balance: 1.00000, allowed: false, decimals: 18, value: 3.45, quote: false, listed: true, quote: false  },
  { symbol: 'AION', balance: 5.00000, allowed: false, decimals: 18, value: 3.32, quote: false, listed: true, quote: false  },
  { symbol: 'LOOM', balance: 8.00000, allowed: true, decimals: 18, value: 120.32, quote: false, listed: true, quote: false  }
]



storiesOf('Token Table', module)
  .addDecorator(withKnobs)
  .add(
    'Token Table (Default)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <TokenTableRenderer
          connected={true}
          baseTokensData={baseTokensData}
          ETHTokenData={ETHTokenData}
          WETHTokenData={WETHTokenData}
          searchInput={""}
          handleSearchInputChange={action('handleSearchInputChange')}
          hideZeroBalanceToken={action('hideZeroBalanceToken')}
          openDepositModal={action('openDepositModal')}
          openSendModal={action('openSendModal')}
          handleToggleAllowance={action('handleToggleAllowance')}
          toggleZeroBalanceToken={action('toggleZeroBalanceToken')}
          redirectToTradingPage={action('redirectToTradingPage')}
          totalFilteredTokens={4}
          referenceCurrency={"$"}
          totalETHandWETHBalance={29.00000}
          selectedToken="ZRX"
           />
      </Card>
    ))
  )
  .add(
    'Token Table (Provider not connected)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <TokenTableRenderer
          connected={true}
          baseTokensData={baseTokensData}
          ETHTokenData={ETHTokenData}
          WETHTokenData={WETHTokenData}
          searchInput={""}
          handleSearchInputChange={action('handleSearchInputChange')}
          hideZeroBalanceToken={action('hideZeroBalanceToken')}
          openDepositModal={action('openDepositModal')}
          openSendModal={action('openSendModal')}
          handleToggleAllowance={action('handleToggleAllowance')}
          toggleZeroBalanceToken={action('toggleZeroBalanceToken')}
          redirectToTradingPage={action('redirectToTradingPage')}
          totalFilteredTokens={4}
          referenceCurrency={"$"}
          totalETHandWETHBalance={29.00000}
          selectedToken="ETH"
           />
      </Card>
    ))
  );
