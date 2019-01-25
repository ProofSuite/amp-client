// @flow
import React from 'react'

import { 
  Icon, 
  Tooltip, 
  Card, 
  Tabs, 
  Tab, 
  InputGroup, 
  Button, 
  Collapse  
} from '@blueprintjs/core'

import {
  formatNumber
} from 'accounting-js'

import {
  Colors,
  Box,
  SmallText,
  Centered,
  Chevron,
  OverlaySpinner,
  ColoredCryptoIcon,
  CryptoIcon,
  SmallTextDiv,
  FlexRow
} from '../Common'

import {
  isNotNull
} from '../../utils/helpers'

import styled from 'styled-components'
import { ResizableBox } from 'react-resizable'

type Token = {
  pair: string,
  lastPrice: string,
  change: string,
  high: string,
  low: string,
  volume: string,
  base: string,
  quote: string,
  favorited: boolean
}

type Props = {
  loading: boolean,
  filteredPairs: any,
  selectedTabId: string,
  baseTokenBalance: number,
  quoteTokenBalance: number,
  baseTokenAvailableBalance: number,
  quoteTokenAvailableBalance: number,
  searchFilter: string,
  selectedPair: Token,
  filterName: string,
  sortOrder: string,
  isOpen: boolean,
  quoteTokens: Array<string>,
  onChangeSortOrder: string => void,
  changeTab: string => void,
  updateFavorite: (string, boolean) => void,
  onChangeSearchFilter: (SyntheticInputEvent<>) => void,
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  changeSelectedToken: Token => void,
  toggleCollapse: () => void,
  expand: () => void,
}

const TokenSearchRenderer = (props: Props) => {
  const {
    loading,
    filteredPairs,
    quoteTokens,
    selectedTabId,
    searchFilter,
    isOpen,
    selectedPair,
    sortOrder,
    filterName,
    updateFavorite,
    onChangeFilterName,
    onChangeSearchFilter,
    onChangeSortOrder,
    changeTab,
    changeSelectedToken,
    toggleCollapse,
    baseTokenBalance,
    quoteTokenBalance,
    baseTokenAvailableBalance,
    quoteTokenAvailableBalance,
    expand
  } = props

  return (
    <TokenSearchCard>
      {loading ? (
        <OverlaySpinner visible={loading} transparent />
      ) : (
        <div style={{ height: '100%', overflowY: 'scroll' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
            <SearchInput
              leftIcon="search"
              onChange={onChangeSearchFilter}
              value={searchFilter}
              placeholder="Search Token ..."
            />
            <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} onClick={toggleCollapse} minimal />
            <Button icon='maximize' onClick={expand} minimal />
          </div>
          <Collapse isOpen={isOpen}>
            <SelectedPair
              selectedPair={selectedPair}
              baseTokenBalance={baseTokenBalance}
              quoteTokenBalance={quoteTokenBalance}
              baseTokenAvailableBalance={baseTokenAvailableBalance}
              quoteTokenAvailableBalance={quoteTokenAvailableBalance}
            />
            <Tabs selectedTabId={selectedTabId} onChange={changeTab}>
              <Tab
                id="star"
                title={<Icon icon="star" />}
                panel={
                  <Panel
                    tokenPairs={filteredPairs.favorites}
                    filterName={filterName}
                    sortOrder={sortOrder}
                    searchFilter={searchFilter}
                    selectedTabId={selectedTabId}
                    selectedPair={selectedPair}
                    changeSelectedToken={changeSelectedToken}
                    updateFavorite={updateFavorite}
                    onChangeSearchFilter={onChangeSearchFilter}
                    onChangeFilterName={onChangeFilterName}
                    onChangeSortOrder={onChangeSortOrder}
                  />
                }
              />
              {quoteTokens.map((quote, index) => (
                <Tab
                  id={quote}
                  key={index}
                  title={quote}
                  panel={
                    <Panel
                      tokenPairs={filteredPairs[quote]}
                      filterName={filterName}
                      sortOrder={sortOrder}
                      searchFilter={searchFilter}
                      selectedTabId={selectedTabId}
                      selectedPair={selectedPair}
                      filteredPairs={filteredPairs}
                      changeSelectedToken={changeSelectedToken}
                      updateFavorite={updateFavorite}
                      onChangeSearchFilter={onChangeSearchFilter}
                      onChangeFilterName={onChangeFilterName}
                      onChangeSortOrder={onChangeSortOrder}
                    />
                  }
                />
              ))}
            </Tabs>
          </Collapse>
        </div>
      )}
    </TokenSearchCard>
  )
}

export default TokenSearchRenderer

type PanelProps = {
  filterName: string,
  sortOrder: string,
  searchFilter: string,
  selectedTabId: string,
  selectedPair: Token,
  tokenPairs: Array<Token>,
  changeSelectedToken: Token => void,
  updateFavorite: (string, boolean) => void,
  onChangeSearchFilter: (SyntheticInputEvent<>) => void,
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  onChangeSortOrder: string => void
}

const Panel = (props: PanelProps) => {
  const {
    filterName,
    tokenPairs,
    sortOrder,
    selectedTabId,
    updateFavorite,
    onChangeFilterName,
    changeSelectedToken
  } = props

  const isFavoriteTokensList = selectedTabId === 'star'

  return (
    <TokenSearchPanelBox>
      <Header
        onChangeFilterName={onChangeFilterName}
        isFavoriteTokensList={isFavoriteTokensList}
        filterName={filterName}
        sortOrder={sortOrder}
      />
      <ListBox>
        {tokenPairs.map((token, index) => (
          <TokenRow
            key={index}
            index={index}
            token={token}
            selectedTabId={selectedTabId}
            isFavoriteTokensList={isFavoriteTokensList}
            updateFavorite={updateFavorite}
            changeSelectedToken={changeSelectedToken}
          />
        ))}
        {tokenPairs.length === 0 && <Centered>No Tokens to show</Centered>}
      </ListBox>
    </TokenSearchPanelBox>
  )
}

type TokenRowProps = {
  index: number,
  token: Token,
  isFavoriteTokensList: boolean,
  updateFavorite: (string, boolean) => void,
  changeSelectedToken: Object => void
}

const TokenRow = ({ index, token, updateFavorite, isFavoriteTokensList, changeSelectedToken }: TokenRowProps) => {
  const { favorited, price, change, base, pair } = token
  return (
    <li key={pair} className="row">
      <ColoredCryptoIcon size={25} name={base} />
      <SmallText
        className="base" 
        onClick={() => changeSelectedToken(token)}
      >
        {isFavoriteTokensList ? pair : base}
      </SmallText>
      <SmallText 
        className="lastPrice" 
        onClick={() => changeSelectedToken(token)}
      >
        {price ? formatNumber(price, { precision: 3 }) : 'N.A'}
      </SmallText>
      <Change24H 
        change={change} 
        onClick={() => changeSelectedToken(token)}
      >
        {isNotNull(change) ? `${formatNumber(change, { precision: 2 })}%` : 'N.A'}
      </Change24H>
      <SmallText className="star">
        <Tooltip
          hoverOpenDelay={500} 
          content={favorited ? ' Unfavorite' : 'Favorite'}
        >
          <Icon icon={favorited ? 'star' : 'star-empty'} onClick={() => updateFavorite(pair, !favorited)} />
        </Tooltip>
      </SmallText>
    </li>
  )
}

type HeaderProps = {
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  filterName: string,
  sortOrder: string,
  isFavoriteTokensList: boolean
}

const Header = ({ onChangeFilterName, filterName, sortOrder, isFavoriteTokensList }: HeaderProps) => {
  return (
    <ListHeader>
      <li className="heading">
        <SmallText className="base" onClick={onChangeFilterName}>
          {isFavoriteTokensList ? 'Token Pair' : 'Token'}
          {filterName === 'base' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </SmallText>
        <span />
        <SmallText className="lastPrice" onClick={onChangeFilterName}>
          Last Price
          {filterName === 'lastPrice' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </SmallText>
        <SmallText className="change" onClick={onChangeFilterName}>
          Change 24H
          {filterName === 'change' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </SmallText>
        <span className="star">&nbsp;</span>
      </li>
    </ListHeader>
  )
}

const SelectedPair = (props: *) => {
  const { 
    selectedPair,
    baseTokenBalance,
    quoteTokenBalance,
    baseTokenAvailableBalance,
    quoteTokenAvailableBalance
  } = props

  const { 
    pair, 
    price, 
    volume, 
    high, 
    low, 
    quote, 
    base
  } = selectedPair

  return (
    <SelectedPairCard>
      <Row>
        <Box p={1}>
          <ColoredCryptoIcon size={60} name={base} />
        </Box>
        <TokenPair>
          <h2>{pair}</h2>
          <SmallTextDiv>
          <b>{base} </b> 
            Balance: {formatNumber(baseTokenAvailableBalance, { precision: 2 })} / {formatNumber(baseTokenBalance, { precision: 2 })}
          </SmallTextDiv>
          <SmallTextDiv>
          <b>{quote} </b> 
            Balance: {formatNumber(quoteTokenAvailableBalance, { precision: 2 }) } / {formatNumber(quoteTokenBalance, { precision: 2 })}
          </SmallTextDiv>
        </TokenPair>
      </Row>
      <List>
        <Item>
          <SmallTextDiv>Price:</SmallTextDiv>
          <SmallTextDiv>{ price ? `${ formatNumber(price, { precision: 5 }) } ${quote}` : 'N.A'}</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>Volume:</SmallTextDiv>
          <SmallTextDiv>{volume ? formatNumber(volume, { precision: 2 }) : 'N.A'  }</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>High:</SmallTextDiv>
          <SmallTextDiv>{high ? formatNumber(high, { precision: 2 }) : 'N.A' }</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>Low:</SmallTextDiv>
          <SmallTextDiv>{low ? formatNumber(low, { precision: 2 }) : 'N.A'}</SmallTextDiv>
        </Item>
      </List>
    </SelectedPairCard>
  )
}

const TokenSearchCard = styled(Card).attrs({
  className: 'token-searcher'
})`
  position: relative;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const TokenSearchPanelBox = styled.div`
  margin-top: 10px;
`

const SelectedPairCard = styled(Card)`
  margin: 15px 0px;
  padding: 5px 15px;
`

const ListBox = styled.ul.attrs({ className: 'list' })`
  height: 100%;
`;

const List = styled.ul`
  border-top: 1px dashed #202f39;
  padding-top: 15px;
  margin-top: 5px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const TokenPair = styled.div`
  padding-left: 25px;

  h2 {
    margin: 0;
  }
`

const SearchInput = styled(InputGroup)`
  width: 92%;
  padding-bottom: 10px;
`

const ListHeader = styled.ul`
  margin: 10px 0 7px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`

const Change24H = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`
