// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'
import CenteredSpinner from '../../components/Common/CenteredSpinner'
import DepositTable from '../../components/DepositTable'
import CurrentWallet from '../../components/CurrentWallet'

import type { TokenData } from '../../types/tokens'

type Props = {
  loading: boolean,
  pvtKeyLocked: boolean,
  accountAddress: string,
  accountPrivateKey: string,
  etherBalance: string,
  gasPrice: number,
  gas: number,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  //Deposit table props
  connected: boolean,
  depositTableData: Array<TokenData>,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void
}

const WalletPageRenderer = ({
  loading,
  pvtKeyLocked,
  connected,
  accountAddress,
  accountPrivateKey,
  etherBalance,
  gasPrice,
  gas,
  tokenData,
  baseTokens,
  quoteTokens,
  toggleAllowance,
  redirectToTradingPage
}: Props) => {
  return (
    <Wrapper>
      <RowWrapper>
        <CurrentWallet
          pvtKeyLocked={pvtKeyLocked}
          accountAddress={accountAddress}
          accountPrivateKey={accountPrivateKey}
          etherBalance={etherBalance}
          gasPrice={gasPrice}
          gas={gas}
        />
        <WalletPageContent>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <RightSection>
              <DepositTableWrapper>
                <DepositTable
                  connected={connected}
                  toggleAllowance={toggleAllowance}
                  tokenData={tokenData}
                  baseTokens={baseTokens}
                  quoteTokens={quoteTokens}
                  redirectToTradingPage={redirectToTradingPage}
                />
              </DepositTableWrapper>
              <HeadingMenu>
              </HeadingMenu>
            </RightSection>
          )}
        </WalletPageContent>
      </RowWrapper>
    </Wrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const HeadingMenu = styled.div`
  width: 30%;
`

const DepositTableWrapper = styled.div`
  height: 100%;
  width: 90%;
`
const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
`

const WalletPageContent = styled(Card)`
  height: 92vh;
  width: 75%;
  margin: 0.5em;
`

export default WalletPageRenderer
