import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

class ReferenceCurrencySelect extends Component {
  renderItem(item, { handleClick, modifiers }) {
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        onClick={rank => handleClick(item.rank)}
        text={`${item.name}: ${item.symbol}`}
        key={item.rank}
      />
    );
  }

  render() {
    const { items, item, icon, handleChange } = this.props;

    const buttonText = `${item.name}: ${item.symbol}` 

    return (
      <Select
        items={items}
        filterable={false}
        itemRenderer={this.renderItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={handleChange}
        popoverProps={{ minimal: true }}
      >
        <Button icon={item.icon ? item.icon : icon} text={buttonText} righticonname="double-caret-vertical" />
      </Select>
    );
  }
}

export default ReferenceCurrencySelect;
