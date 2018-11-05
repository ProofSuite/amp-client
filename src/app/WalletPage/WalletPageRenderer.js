// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'
import CenteredSpinner from '../../components/Common/CenteredSpinner'
import DepositTable from '../../components/DepositTable'
import WalletInfo from '../../components/WalletInfo'

import type { TokenData } from '../../types/tokens'

type Props = {
  gas: number,
  gasPrice: number,
  loading: boolean,
  etherBalance: string,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  connected: boolean,
  accountAddress: string,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void
}

const WalletPageRenderer = ({
  gas,
  gasPrice,
  loading,
  etherBalance,
  tokenData,
  baseTokens,
  quoteTokens,
  connected,
  accountAddress,
  toggleAllowance,
  redirectToTradingPage
}: Props) => {
  return (
    <WalletPageBox>
      <RowWrapper>
        <WalletInfoBox>
          <WalletInfo
            accountAddress={accountAddress}
            etherBalance={etherBalance}
            gasPrice={gasPrice}
            gas={gas}
          />
        </WalletInfoBox>
        <WalletPageContentBox>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <DepositTableBox>
              <DepositTable
                connected={connected}
                toggleAllowance={toggleAllowance}
                tokenData={tokenData}
                baseTokens={baseTokens}
                quoteTokens={quoteTokens}
                redirectToTradingPage={redirectToTradingPage}
              />
            </DepositTableBox>
          )}
        </WalletPageContentBox>
      </RowWrapper>
    </WalletPageBox>
  )
}


const WalletPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 10em;
`

const WalletInfoBox = styled.div`
  width: 35%;
  height: 92vh;
  margin-right: 0.5em;
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WalletPageContentBox = styled(Card)`
  height: 92vh;
  width: 75%;
  margin-right: 0.5em;
  margin-left: 0.5em;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const DepositTableBox = styled.div`
  height: 100%;
  width: 100%;
`



export default WalletPageRenderer
