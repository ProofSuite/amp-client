// @flow
import React from 'react'
import { Icon, Card, Tabs, Tab, InputGroup, Button, Collapse } from '@blueprintjs/core'
import {} from '../Common'
import {
  Box,
  Colors,
  Centered,
  Chevron,
  OverlaySpinner,
  CryptoIcon,
  ColumnEnd,
  ColoredCryptoIcon,
  RowStart,
  ColumnStart
} from '../Common'
import styled from 'styled-components'

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
  toggleCollapse: () => void
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
    quoteTokenBalance
  } = props
  return (
    <TokenSearchCard>
      {loading ? (
        <OverlaySpinner visible={loading} transparent />
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '30px' }}>
            <SearchInput
              leftIcon="search"
              onChange={onChangeSearchFilter}
              value={searchFilter}
              placeholder="Search Token ..."
            />
            <Button icon={isOpen ? 'chevron-up' : 'chevron-down'} onClick={toggleCollapse} minimal />
          </div>
          <Collapse isOpen={isOpen}>
            <SelectedPair
              selectedPair={selectedPair}
              baseTokenBalance={baseTokenBalance}
              quoteTokenBalance={quoteTokenBalance}
            />
            <TokenSearchTabs selectedTabId={selectedTabId} onChange={changeTab}>
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
            </TokenSearchTabs>
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
      <ul className="list">
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
      </ul>
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
  const { favorited, lastPrice, change, base, pair } = token
  return (
    <li key={pair} className="row">
      <CryptoIcon name={base} />
      <span className="base" onClick={() => changeSelectedToken(token)}>
        {isFavoriteTokensList ? pair : base}
      </span>
      <span className="lastPrice" onClick={() => changeSelectedToken(token)}>
        {lastPrice ? lastPrice : 'N.A'}
      </span>
      <Change24H change={change} onClick={() => changeSelectedToken(token)}>
        {change ? `${change}%` : 'N.A'}
      </Change24H>
      <span className="star">
        <Icon icon={favorited ? 'star' : 'star-empty'} onClick={() => updateFavorite(pair, !favorited)} />
      </span>
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
        <span className="base" onClick={onChangeFilterName}>
          {isFavoriteTokensList ? 'Token Pair' : 'Token'}
          {filterName === 'base' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </span>
        <span className="lastPrice" onClick={onChangeFilterName}>
          Last Price
          {filterName === 'lastPrice' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </span>
        <span className="change" onClick={onChangeFilterName}>
          Change 24H
          {filterName === 'change' && (
            <span className="icon">
              <Chevron direction={sortOrder} />
            </span>
          )}
        </span>
        <span className="star">&nbsp;</span>
      </li>
    </ListHeader>
  )
}

const SelectedPair = ({ selectedPair, baseTokenBalance, quoteTokenBalance }) => {
  const { pair, lastPrice, volume, high, low, quote, base } = selectedPair

  return (
    <SelectedPairCard>
      <Row>
        <ColumnStart>
          <RowStart>
            <ColoredCryptoIcon size={60} name={base} />
            <TokenPair>{pair}</TokenPair>
          </RowStart>
          <Box mt={3}>
            <p>
              {base} Balance: {baseTokenBalance || 'N.A'}
            </p>
            <p>
              {quote} Balance: {quoteTokenBalance || 'N.A' }
            </p>
          </Box>
        </ColumnStart>
        <ColumnEnd>
          <p className="lastPrice">
            Last Price: { lastPrice ? `${lastPrice}/${quote}` : 'N.A'}
          </p>
          <p>Volume: {volume || 'N.A' }</p>
          <p>
            <span className="label">High: </span>
            {high || 'N.A'}
          </p>
          <p>
            <span className="label">Low: </span>
            {low || 'N.A'}
          </p>
        </ColumnEnd>
      </Row>
    </SelectedPairCard>
  )
}

const TokenSearchCard = styled(Card).attrs({
  className: 'token-searcher'
})`
  position: relative;
`

const TokenSearchTabs = styled(Tabs)`
  margin-bottom: 20px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const TokenSearchPanelBox = styled.div`
  height: 100%;
  margin-top: 10px;
`

const SelectedPairCard = styled(Card)`
  margin: 15px 0px;
  padding: 18px 18px 9px 18px !important;
`

const TokenPair = styled.h3`
  color: ${Colors.LINK} !important;
  font-size: 25px;
  margin-top: 15px !important;
  margin-left: 15px !important;
  margin: 0;
`

const SearchInput = styled(InputGroup)`
  width: 92%;
  padding-bottom: 10px;
`

const ListHeader = styled.ul`
  margin: 10px 0 7px;
`

const Change24H = styled.span.attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`
