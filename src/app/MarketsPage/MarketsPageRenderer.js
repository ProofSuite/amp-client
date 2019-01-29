// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'
import CenteredSpinner from '../../components/Common/CenteredSpinner'
import MarketsTable from '../../components/MarketsTable'
import StatisticsBoard from '../../components/StatisticsBoard'

import { Box } from '../../components/Common'

import { Spring } from 'react-spring'

type Props = {
  loading: boolean,
  showMarketStatistics: boolean,
  toggleMarketStatistics: void => void
}

const MarketsPageRenderer = (props: Props) => {
  const {
    loading,
    showMarketStatistics,
    toggleMarketStatistics
  } = props

  return (
      <MarketPageBox>
      <RowWrapper>
        <MarketPageContentBox>
          {loading ? (
            <CenteredSpinner />
          ) : (
            <MarketsTableBox>
            {
              showMarketStatistics ? (
                  <StatisticsBoard  
                    toggleMarketStatistics={toggleMarketStatistics}
                  />
              ) : (
                  <MarketsTable
                    toggleMarketStatistics={toggleMarketStatistics}
                  />
              )
            }
            </MarketsTableBox>
          )}
        </MarketPageContentBox>
      </RowWrapper>
      </MarketPageBox>
  )
}


const MarketPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`

const MarketPageContentBox = styled(Card)`
  height: 90vh;
  width: 100%;
  margin-right: 0.5em;
  margin-left: 0.5em;
  overflow-y:scroll;
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
