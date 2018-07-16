//@flow
import React from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

type Props = {
  items: Array<Object>,
  item: Object,
  onChange: (SyntheticEvent<>) => void,
};

const TokenSelectRenderer = ({ item, items, onChange }: Props) => {
  return (
    <Select
      items={items}
      filterable={true}
      itemRenderer={renderItem}
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
    </Select>
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

export default TokenSelectRenderer;
