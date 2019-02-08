// @flow

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
            gas={100} 
            listedTokens={["0x3", "0x4"]}
            userTokens={["0x3", "0x4"]}
            registeredTokens={["0x3", "0x4"]}
            detectContract={action("detectContract")}
            addToken={action("addToken")}
            registerToken={action("registerToken")}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Portfolio)',
    withInfo({ source: false })(() => (
      <Card className="bp3-dark">
        <WalletInfoRenderer
            isModalOpen={false}
            accountAddress="0x1"
            balance="0x2"
            accountEtherscanUrl=""
            gasPrice={10000}
            gas={100}
            selectedTab="Portfolio"
            tokenAddress=""
            tokenSymbol=""
            tokenEtherscanUrl=""
            recentTransactions={[]}
            addTokenPending={false}
            registerTokenPending={false}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsListed={false}
            tokenIsRegistered={false}
            handleChangeTab={action("handleChangeTab")}
            handleChangeTokenAddress={action("handleChangeTokenAddress")}
            handleDetectContract={action("handleDetectContract")}
            handleModalClose={action("handleModalClose")}
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsListed={false}
            tokenIsRegistered={false}
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsListed={false}
            tokenIsRegistered={false}
        />
      </Card>
    ))
  )
    .add(
    'Wallet Info Renderer (Add Token - Contract Detected - Token added/registered/listed)',
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={true}
            tokenIsListed={true}
            tokenIsRegistered={true}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token - Contract Detected - Token not added/registered/not listed)',
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsListed={false}
            tokenIsRegistered={true}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token - Contract Detected - Token not added/not registered/not listed)',
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsListed={false}
            tokenIsRegistered={false}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token - Contract Detected - Token  added/not registered/not listed)',
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={true}
            tokenIsRegistered={false}
            tokenIsListed={false}
        />
      </Card>
    ))
  )
  .add(
    'Wallet Info Renderer (Add Token - Contract Detected - Token  not added/registered/not listed)',
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
            handleAddToken={action("handleAddToken")}
            handleRegisterToken={action("handleRegisterToken")}
            tokenAddressStatus=""
            tokenIsAdded={false}
            tokenIsRegistered={true}
            tokenIsListed={false}
        />
      </Card>
    ))
  )



