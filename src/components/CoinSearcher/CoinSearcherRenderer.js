// @flow
import React from 'react';
import { Colors, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { round } from '../../utils/converters';
import Loading from '../Loading';
// import type { CoinRowTypes, CoinSearchTypes, HeaderTypes } from '../../types/coinSearcher';

const CoinSearchRenderer = (props) => {
  const {
    state: { filterName, sortOrder },
    small,
    filteredCoins,
    decimals,
    toggleStar,
    onChangeFilterName,
    changeSelectedCoin,
  } = props;
  const emptyCoin = filteredCoins.length > 0 && Object.keys(filteredCoins[0]).length < 1;
  return (
    <div style={{ height: '100%' }}>
      {small ? (
        <SmallHeader onChangeFilterName={onChangeFilterName} filterName={filterName} sortOrder={sortOrder} />
      ) : (
        <LargeHeader onChangeFilterName={onChangeFilterName} filterName={filterName} sortOrder={sortOrder} />
      )}

      {filteredCoins.length < 2 && emptyCoin ? (
        <Loading />
      ) : (
        <ul className="list">
          {filteredCoins.map(function(coin, index) {
            return small ? (
              <SmallCoinRow key={index} props={{ index, coin, decimals, toggleStar, changeSelectedCoin }} />
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

const CoinRow = ({ props }) => (
  <li key={props.index} className="not-heading">
    <span className="star">
      <Icon icon={props.coin.starred ? 'star' : 'star-empty'} onClick={() => props.toggleStar(props.coin.name)} />
    </span>
    <span className="pair">{props.coin.pair}</span>
    <span className="name">{props.coin.name}</span>
    <span className="symbol">{props.coin.symbol}</span>
    <span className="price">{round(props.coin.lastPrice, props.decimals)}</span>
    <span
      className="change"
      style={parseFloat(props.coin.change) > 0 ? { color: Colors.GREEN5 } : { color: Colors.RED4 }}
    >
      {props.change}%
    </span>
    <span className="price">{round(props.coin.high, props.decimals)}</span>
    <span className="price">{round(props.coin.low, props.decimals)}</span>
    <span className="price">{round(props.coin.volume, props.decimals)}</span>
  </li>
);

const SmallCoinRow = ({ props }) => {
  const {
    index,
    coin,
    decimals,
    coin: { starred, lastPrice, change, name, symbol },
    toggleStar,
    changeSelectedCoin,
  } = props;
  return (
    <li key={index} className="not-heading">
      <span className="star">
        <Icon icon={starred ? 'star' : 'star-empty'} onClick={() => toggleStar(name)} />
      </span>
      <span className="symbol" onClick={() => changeSelectedCoin(coin)}>
        {symbol}
      </span>
      <span className="price">{round(lastPrice, decimals)}</span>
      {parseFloat(change) > 0 ? (
        <PositiveChange className="change">{change}%</PositiveChange>
      ) : (
        <NegativeChange className="change">{change}%</NegativeChange>
      )}
    </li>
  );
};

const SmallHeader = (props) => {
  const { onChangeFilterName, filterName, sortOrder } = props;
  return (
    <ul className="heading">
      <li className="heading">
        <span className="star">&nbsp;</span>
        <span className="symbol" onClick={() => onChangeFilterName('symbol')}>
          Symbol
          {filterName === 'symbol' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('lastPrice')}>
          Last Price
          {filterName === 'lastPrice' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="hr-24 change" onClick={() => onChangeFilterName('change')}>
          24hr Change
          {filterName === 'change' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="smaller-searcher change" onClick={() => onChangeFilterName('change')}>
          Change
          {filterName === 'change' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
      </li>
    </ul>
  );
};

const LargeHeader = (props) => {
  const { onChangeFilterName, filterName, sortOrder } = props;
  return (
    <ul className="heading">
      <li className="heading">
        <span className="star">&nbsp;</span>
        <span className="pair" onClick={() => onChangeFilterName('pair')}>
          Pair
          {filterName === 'pair' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="name" onClick={() => onChangeFilterName('name')}>
          Name
          {filterName === 'name' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="symbol" onClick={() => onChangeFilterName('symbol')}>
          Symbol
          {filterName === 'symbol' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('lastPrice')}>
          Last Price
          {filterName === 'lastPrice' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="change" onClick={() => onChangeFilterName('change')}>
          24hr Change
          {filterName === 'change' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('high')}>
          24hr High
          {filterName === 'high' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('low')}>
          24hr Low
          {filterName === 'low' && (
            <span className="icon">
              <Icon icon={sortOrder === 'asc' ? 'chevron-down' : 'chevron-up'} />
            </span>
          )}
        </span>
        <span className="price" onClick={() => onChangeFilterName('volume')}>
          Volume
          {filterName === 'volume' && (
            <span className="icon">
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
