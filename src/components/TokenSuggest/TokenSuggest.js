// @flow
import React from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';

type Props = {
  tokens: Array<Object>,
  token: Object,
  onChange: (SyntheticEvent<>) => void,
};

type RendererProps = {
  items: Array<Object>,
  item: Object,
  onChange: (SyntheticEvent<>) => void,
};

const TokenSelect = (props: Props) => {
  return <TokenSuggestRenderer items={props.tokens} item={props.token} onChange={props.onChange} />;
};

const TokenSuggestRenderer = ({ item, items, onChange }: RendererProps) => {
  return (
    <Suggest
      items={items}
      filterable={true}
      itemRenderer={renderItem}
      itemPredicate={filterItem}
      inputValueRenderer={renderInputValue}
      noResults={<MenuItem disabled text="No results." />}
      onItemSelect={onChange}
      popoverProps={{ minimal: true }}
    >
      <Button
        text={item ? `${item.symbol}` : '(No selection)'}
        rightIconName="double-caret-vertical"
        fill={true}
        intent="primary"
      />
    </Suggest>
  );
};

const renderItem = (item, { handleClick, modifiers }) => {
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={item.address}
      key={item.rank}
      onClick={handleClick}
      text={`${item.rank}. ${item.symbol}`}
    />
  );
};

const renderInputValue = item => item.symbol;

const filterItem = (query, item) => {
  return `${item.symbol.toLowerCase()} ${item.address.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0;
};

export default TokenSelect;
