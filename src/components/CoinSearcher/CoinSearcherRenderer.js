// @flow
import React from 'react';
import { Colors, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { reduceDecimals } from '../../utils/converters';
import Loading from '../Loading';
import type { CoinRowTypes, CoinSearchTypes, HeaderTypes } from '../../types/coinSearcher';

const CoinSearchRenderer = (props: CoinSearchTypes) => {
  const {
    state: { filterName, sortOrder },
    small,
    loading,
    filteredCoins,
    decimals,
    toggleStar,
    onChangeFilterName,
  } = props;
  return (
    <div style={{ height: '100%' }}>
      {small ? (
        <SmallHeader onChangeFilterName={onChangeFilterName} filterName={filterName} sortOrder={sortOrder} />
      ) : (
        <LargeHeader onChangeFilterName={onChangeFilterName} filterName={filterName} sortOrder={sortOrder} />
      )}

      {loading && <Loading />}

      {!loading && (
        <ul className="list">
          {filteredCoins.map(function(coin, index) {
            return small ? (
              <SmallCoinRow key={index} props={{ index, coin, decimals, toggleStar }} />
            ) : (
              <CoinRow key={index} props={{ index, coin, decimals, toggleStar }} />
            );
          })}
          {filteredCoins.length === 0 && <NotFound />}
        </ul>
      )}
    </div>
  );
};
export default CoinSearchRenderer;

const NotFound = () => (
  <li className="not-heading not-found">
    <span style={{ textAlign: 'center' }}>
      <Icon style={{ color: '#f2b824' }} icon="issue" />&nbsp; No result found.
    </span>
  </li>
);

const CoinRow = ({ props }: CoinRowTypes) => (
  <li key={props.index} className="not-heading">
    <span className="star">
      <Icon icon={props.coin.starred ? 'star' : 'star-empty'} onClick={() => props.toggleStar(props.coin.name)} />
    </span>
    <span className="pair">{props.coin.pair}</span>
    <span className="name">{props.coin.name}</span>
    <span className="symbol">{props.coin.symbol}</span>
    <span className="price">{reduceDecimals(props.coin.lastPrice, props.decimals)}</span>
    <span
      className="change"
      style={parseFloat(props.coin.change) > 0 ? { color: Colors.GREEN5 } : { color: Colors.RED4 }}
    >
      {reduceDecimals(props.coin.change, props.decimals)}%
    </span>
    <span className="price">{reduceDecimals(props.coin.high, props.decimals)}</span>
    <span className="price">{reduceDecimals(props.coin.low, props.decimals)}</span>
    <span className="price">{reduceDecimals(props.coin.volume, props.decimals)}</span>
  </li>
);

const SmallCoinRow = ({ props }: CoinRowTypes) => (
  <li key={props.index} className="not-heading">
    <span className="star">
      <Icon icon={props.coin.starred ? 'star' : 'star-empty'} onClick={() => props.toggleStar(props.coin.name)} />
    </span>
    <span className="symbol">{props.coin.symbol}</span>
    <span className="price">{reduceDecimals(props.coin.lastPrice, props.decimals)}</span>
    {parseFloat(props.coin.change) > 0 ? (
      <PositiveChange className="change">{reduceDecimals(props.coin.change, props.decimals)}%</PositiveChange>
    ) : (
      <NegativeChange className="change">{reduceDecimals(props.coin.change, props.decimals)}%</NegativeChange>
    )}
    <span className="price">{reduceDecimals(props.coin.volume, props.decimals)}</span>
  </li>
);

const SmallHeader = (props: HeaderTypes) => {
  const { onChangeFilterName, filterName, sortOrder } = props;
  return (
    <ul className="heading">
      <li className="heading">
        <span className="star">&nbsp;</span>
        <span className="symbol" onClick={() => onChangeFilterName('symbol')}>
          Symbol
          {filterName === 'symbol' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('lastPrice')}>
          Last Price
          {filterName === 'lastPrice' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="change" onClick={() => onChangeFilterName('change')}>
          24hr Change
          {filterName === 'change' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('volume')}>
          Volume
          {filterName === 'volume' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
      </li>
    </ul>
  );
};

const LargeHeader = (props: HeaderTypes) => {
  const { onChangeFilterName, filterName, sortOrder } = props;
  return (
    <ul className="heading">
      <li className="heading">
        <span className="star">&nbsp;</span>
        <span className="pair" onClick={() => onChangeFilterName('pair')}>
          Pair
          {filterName === 'pair' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="name" onClick={() => onChangeFilterName('name')}>
          Name
          {filterName === 'name' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="symbol" onClick={() => onChangeFilterName('symbol')}>
          Symbol
          {filterName === 'symbol' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('lastPrice')}>
          Last Price
          {filterName === 'lastPrice' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="change" onClick={() => onChangeFilterName('change')}>
          24hr Change
          {filterName === 'change' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('high')}>
          24hr High
          {filterName === 'high' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('low')}>
          24hr Low
          {filterName === 'low' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('volume')}>
          Volume
          {filterName === 'volume' && (
            <span>
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
      </li>
    </ul>
  );
};

const NegativeChange = styled.span`
  color: ${Colors.RED4} !important;
`;

const PositiveChange = styled.span`
  color: ${Colors.GREEN5} !important;
`;
