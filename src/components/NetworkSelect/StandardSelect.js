// @flow
import React from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

type Item = {
  name: string,
  rank: number,
  id: number,
};

type Props = {
  item?: Item,
  items: Item[],
  handleChange: Object => void,
};

class StandardSelect extends React.PureComponent<Props> {
  renderItem(item: Item, { handleClick, modifiers }: any) {
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        label={item ? `Network ID: ${item.id}` : ``}
        key={item.rank}
        onClick={handleClick}
        text={`${item.name}`}
      />
    );
  }

  render() {
    return (
      <Select
        items={this.props.items}
        filterable={false}
        itemRenderer={this.renderItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.props.handleChange}
        popoverProps={{ minimal: true }}
      >
        <Button
          text={this.props.item ? `${this.props.item.name}` : '(No selection)'}
          rightIcon="double-caret-vertical"
        />
      </Select>
    );
  }
}

export default StandardSelect;
