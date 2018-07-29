// @flow
import React from 'react';
import { Icon, Card, Tabs, Tab, InputGroup } from '@blueprintjs/core';
import { ColumnEnd, RowSpaceBetween } from '../Common';
import { Colors, Centered, Chevron, OverlaySpinner } from '../Common';
import styled from 'styled-components';
import Loading from '../Loading';

type Token = {
  pair: string,
  lastPrice: string,
  change: string,
  high: string,
  low: string,
  volume: string,
  base: string,
  quote: string,
  favorited: boolean,
};

type Props = {
  loading: boolean,
  filteredPairs: any,
  selectedTabId: string,
  searchFilter: string,
  selectedToken: Token,
  filterName: string,
  sortOrder: string,
  quoteTokens: Array<string>,
  onChangeSortOrder: string => void,
  changeTab: string => void,
  updateFavorite: (string, boolean) => void,
  changeSelectedToken: Object => void,
  onChangeSearchFilter: (SyntheticInputEvent<>) => void,
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  changeSelectedToken: Token => void,
};

const TokenSearchRenderer = (props: Props) => {
  const {
    loading,
    filteredPairs,
    quoteTokens,
    selectedTabId,
    searchFilter,
    selectedToken,
    sortOrder,
    filterName,
    updateFavorite,
    onChangeFilterName,
    onChangeSearchFilter,
    onChangeSortOrder,
    changeTab,
    changeSelectedToken,
  } = props;

  return (
    <TokenSearchCard>
      {loading ? (
        <OverlaySpinner visible={loading} transparent />
      ) : (
        <div>
          <SearchInput large onChange={onChangeSearchFilter} value={searchFilter} placeholder="Search ..." />
          <SelectedCoin selectedToken={selectedToken} />
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
                  selectedToken={selectedToken}
                  changeSelectedToken={changeSelectedToken}
                  updateFavorite={updateFavorite}
                  onChangeSearchFilter={onChangeSearchFilter}
                  onChangeFilterName={onChangeFilterName}
                  onChangeSortOrder={onChangeSortOrder}
                />
              }
            />
            {quoteTokens.map(quote => (
              <Tab
                id={quote}
                title={quote}
                panel={
                  <Panel
                    tokenPairs={filteredPairs[quote]}
                    filterName={filterName}
                    sortOrder={sortOrder}
                    searchFilter={searchFilter}
                    selectedToken={selectedToken}
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
        </div>
      )}
    </TokenSearchCard>
  );
};

export default TokenSearchRenderer;

type PanelProps = {
  filterName: string,
  sortOrder: string,
  searchFilter: string,
  selectedToken: Token,
  tokenPairs: Array<Token>,
  changeSelectedToken: Token => void,
  updateFavorite: (string, boolean) => void,
  onChangeSearchFilter: (SyntheticInputEvent<>) => void,
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  onChangeSortOrder: string => void,
};

const Panel = (props: PanelProps) => {
  const { filterName, tokenPairs, sortOrder, updateFavorite, onChangeFilterName, changeSelectedToken } = props;

  return (
    <TokenSearchPanelBox>
      <Header onChangeFilterName={onChangeFilterName} filterName={filterName} sortOrder={sortOrder} />
      <ul className="list">
        {tokenPairs.map((token, index) => (
          <TokenRow
            key={index}
            index={index}
            token={token}
            updateFavorite={updateFavorite}
            changeSelectedToken={changeSelectedToken}
          />
        ))}
        {tokenPairs.length === 0 && <Centered>No Tokens to show</Centered>}
      </ul>
    </TokenSearchPanelBox>
  );
};

type TokenRowProps = {
  index: number,
  token: Token,
  updateFavorite: (string, boolean) => void,
  changeSelectedToken: Object => void,
};

const TokenRow = ({ index, token, updateFavorite, changeSelectedToken }: TokenRowProps) => {
  const { favorited, lastPrice, change, base, pair } = token;

  return (
    <li key={pair} className="row">
      <span className="star">
        <Icon icon={favorited ? 'star' : 'star-empty'} onClick={() => updateFavorite(pair, !favorited)} />
      </span>
      <span className="base" onClick={() => changeSelectedToken(token)}>
        {base}
      </span>
      <span className="lastPrice" onClick={() => changeSelectedToken(token)}>
        {lastPrice}
      </span>
      <Change24H change={change} onClick={() => changeSelectedToken(token)}>
        {change}%
      </Change24H>
    </li>
  );
};

type HeaderProps = {
  onChangeFilterName: (SyntheticInputEvent<>) => void,
  filterName: string,
  sortOrder: string,
};

const Header = ({ onChangeFilterName, filterName, sortOrder }: HeaderProps) => {
  return (
    <ul>
      <li className="heading">
        <span className="star">&nbsp;</span>
        <span className="base" onClick={onChangeFilterName}>
          Token
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
      </li>
    </ul>
  );
};

const SelectedCoin = ({ selectedToken }) => {
  const { pair, lastPrice, volume, high, low, base, quote } = selectedToken;
  return (
    <SelectedCoinCard>
      <RowSpaceBetween>
        <TokenPair>{pair}</TokenPair>
        <ColumnEnd>
          <p className="lastPrice">
            Last Price: {lastPrice}/{quote}
          </p>
          <p>Volume: {volume}</p>
          <p>
            <span className="label">High: </span>
            {high}
          </p>
          <p>
            <span className="label">Low: </span>
            {low}
          </p>
        </ColumnEnd>
      </RowSpaceBetween>
    </SelectedCoinCard>
  );
};

const TokenSearchCard = styled(Card).attrs({
  className: 'token-searcher',
})`
  position: relative;
`;

const TokenSearchTabs = styled(Tabs)`
  margin-bottom: 20px;
`;

const TokenSearchPanelBox = styled.div`
  height: 100%;
  margin-top: 20px;
`;

const SelectedCoinCard = styled(Card)`
  margin: 15px 0px;
  padding: 15px;
`;

const TokenPair = styled.h4`
  color: ${Colors.LINK} !important;
`;

const SearchInput = styled(InputGroup)`
  width: 150px;
  padding-bottom: 10px;
`;

const Change24H = styled.span.attrs({ className: 'change' })`
  color: ${props => (props.change > 0 ? Colors.GREEN5 : Colors.RED4)} !important;
`;
