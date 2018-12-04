// @flow
import React from 'react'
import { Icon, Tooltip, Card, Tabs, Tab, InputGroup, Button, Collapse } from '@blueprintjs/core'
import {
  Box,
  Colors,
  SmallText,
  Centered,
  Chevron,
  OverlaySpinner,
  ColoredCryptoIcon,
  CryptoIcon,
  ColumnEnd,
  RowStart,
  ColumnStart,
  SmallTextDiv
} from '../Common'
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
      <ResizableBox height={150}>
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
      </ResizableBox>
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
      <CryptoIcon size={25} name={base} />
      <SmallText className="base" onClick={() => changeSelectedToken(token)}>
        {isFavoriteTokensList ? pair : base}
      </SmallText>
      <SmallText className="lastPrice" onClick={() => changeSelectedToken(token)}>
        {lastPrice ? lastPrice : 'N.A'}
      </SmallText>
      <Change24H change={change} onClick={() => changeSelectedToken(token)}>
        {change ? `${change}%` : 'N.A'}
      </Change24H>
      <SmallText className="star">
        <Tooltip hoverOpenDelay={500} content={favorited ? ' Unfavorite' : 'Favorite'}>
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

const SelectedPair = ({ selectedPair, baseTokenBalance, quoteTokenBalance }) => {
  const { pair, lastPrice, volume, high, low, quote, base } = selectedPair

  return (
    <SelectedPairCard>
      <Row>
        <ColoredCryptoIcon size={90} name={base} />
        <TokenPair>
          <h2>{pair}</h2>
          <div><b>{base}</b> Balance: {baseTokenBalance || 'N.A'}</div>
          <div><b>{quote}</b> Balance: {quoteTokenBalance || 'N.A' }</div>
        </TokenPair>
      </Row>
      <List>
        <Item>
          <SmallTextDiv>Last Price:</SmallTextDiv>
          <SmallTextDiv>{ lastPrice ? `${lastPrice}/${quote}` : 'N.A'}</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>Volume:</SmallTextDiv>
          <SmallTextDiv>{volume || 'N.A' }</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>High:</SmallTextDiv>
          <SmallTextDiv>{high || 'N.A'}</SmallTextDiv>
        </Item>
        <Item>
          <SmallTextDiv>Low:</SmallTextDiv>
          <SmallTextDiv>{low || 'N.A'}</SmallTextDiv>
        </Item>
      </List>
    </SelectedPairCard>
  )
}

const TokenSearchCard = styled(Card).attrs({
  className: 'token-searcher'
})`
  position: relative;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const TokenSearchPanelBox = styled.div`
  height: 100%;
  margin-top: 10px;
`

const SelectedPairCard = styled(Card)`
  margin: 15px 0px;
  padding: 5px 15px;
`

const List = styled.ul`
  border-top: 1px dashed #202f39;
  padding-top: 15px;
  margin-top: 5px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
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
`

const Change24H = styled(SmallText).attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`
