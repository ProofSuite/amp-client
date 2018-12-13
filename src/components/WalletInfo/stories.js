import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
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
    'Wallet Info Renderer (Portfolio)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfoRenderer 
            isModalOpen={false}
            handleModalClose={action("handleModalClose")}
            accountAddress="0x1"
            balance="0x2"
            gasPrice={10000}
            gas={100}
            handleChangeTab={action("handleChangeTab")}
            selectedTab="Portfolio"
            tokenAddress=""
            tokenSymbol=""
            tokenEtherscanUrl=""
            handleChangeTokenAddress={action("handleChangeTokenAddress")}
            handleDetectContract={action("handleDetectContract")}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfoRenderer 
            isModalOpen={false}
            handleModalClose={action("handleModalClose")}
            accountAddress="0x1"
            balance="0x2"
            gasPrice={10000} 
            gas={100} 
            handleChangeTab={action("handleChangeTab")}
            selectedTab="Add Token"
            tokenAddress=""
            tokenSymbol=""
            tokenEtherscanUrl=""
            handleChangeTokenAddress={action("handleChangeTokenAddress")}
            handleDetectContract={action("handleDetectContract")}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token - Contract Detected)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfoRenderer 
            isModalOpen={false}
            handleModalClose={action("handleModalClose")}
            accountAddress="0x1"
            balance="0x2"
            gasPrice={10000} 
            gas={100} 
            handleChangeTab={action("handleChangeTab")}
            selectedTab="Add Token"
            tokenAddress="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            tokenSymbol="USDC"
            tokenEtherscanUrl="https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            handleChangeTokenAddress={action("handleChangeTokenAddress")}
            handleDetectContract={action("handleDetectContract")}
        />
      </Card>
    ))
  );

