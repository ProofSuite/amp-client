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
  //Deposit table props
  provider: string,
  depositTableData: Array<TokenData>,
  toggleAllowance: string => void,
  redirectToTradingPage: string => void
}

const WalletPageRenderer = ({
  loading,
  pvtKeyLocked,
  provider,
  depositTableData,
  accountAddress,
  accountPrivateKey,
  etherBalance,
  gasPrice,
  gas,
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
                  provider={provider}
                  toggleAllowance={toggleAllowance}
                  depositTableData={depositTableData}
                  redirectToTradingPage={redirectToTradingPage}
                />
              </DepositTableWrapper>
              <HeadingMenu>
                <h4>Heading</h4>
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
  width: 69%;
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
