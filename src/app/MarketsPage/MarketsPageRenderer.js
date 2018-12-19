// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'
import CenteredSpinner from '../../components/Common/CenteredSpinner'
import MarketsTable from '../../components/MarketsTable'

type Props = {
  loading: boolean,
}

const MarketsPageRenderer = (props: Props) => {
  const {
    loading
  } = props

  return (
    <WalletPageBox>
      <RowWrapper>
        <WalletPageContentBox>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <MarketsTableBox>
              <MarketsTable/>
            </MarketsTableBox>
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
  margin-bottom: 1em;
`

const WalletPageContentBox = styled(Card)`
  height: 92vh;
  width: 100%;
  margin-right: 0.5em;
  margin-left: 0.5em;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const MarketsTableBox = styled.div`
  height: 100%;
  width: 100%;
`

export default MarketsPageRenderer
