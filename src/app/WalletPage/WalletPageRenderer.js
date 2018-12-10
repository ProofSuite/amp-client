// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'
import CenteredSpinner from '../../components/Common/CenteredSpinner'
import TokenTable from '../../components/TokenTable'
import WalletInfo from '../../components/WalletInfo'
import GetStartedModal from '../../components/GetStartedModal'

import type { TokenData } from '../../types/tokens'

type Props = {
  gas: number,
  gasPrice: number,
  etherBalance: string,
  tokenData: Array<TokenData>,
  baseTokens: Array<string>,
  quoteTokens: Array<string>,
  connected: boolean,
  accountAddress: string,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void,
  isHelpModalOpen: boolean,
  closeHelpModal: void => void,
  balancesLoading: boolean,
}

const WalletPageRenderer = (props: Props) => {
  const {
    gas,
    gasPrice,
    etherBalance,
    tokenData,
    baseTokens,
    quoteTokens,
    connected,
    accountAddress,
    toggleAllowance,
    redirectToTradingPage,
    isHelpModalOpen,
    closeHelpModal,
    balancesLoading
  } = props

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
          {balancesLoading ? (
            <CenteredSpinner />
          ) : (
            <DepositTableBox>
              <TokenTable
                connected={connected}
                tokenData={tokenData}
                baseTokens={baseTokens}
                quoteTokens={quoteTokens}
                toggleAllowance={toggleAllowance}
                redirectToTradingPage={redirectToTradingPage}
              />
            </DepositTableBox>
          )}
        </WalletPageContentBox>
      </RowWrapper>
      <GetStartedModal isOpen={isHelpModalOpen} closeHelpModal={closeHelpModal} />
    </WalletPageBox>
  )
}


const WalletPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`

const WalletInfoBox = styled.div`
  width: 30%;
  height: 92vh;
  margin-right: 0.5em;
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WalletPageContentBox = styled(Card)`
  height: 92vh;
  width: 70%;
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
