import React from 'react';
import PropTypes from 'prop-types';
import { Button, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

class WalletSelect extends React.Component {
  renderItem(item, { handleClick, modifiers }) {
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        onClick={rank => handleClick(item.rank)}
        text={`${item.rank + 1}. ${item.address}`}
        key={item.rank}
      />
    );
  }

  render() {
    const { items, item, icon, handleChange, label } = this.props;
    return (
      <Select
        items={items}
        filterable={false}
        itemRenderer={this.renderItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={handleChange}
        popoverProps={{ minimal: true }}
      >
        <Button icon={item.icon ? item.icon : icon} text={label} righticonname="double-caret-vertical" />
      </Select>
    );
  }
}

WalletSelect.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  handleChange: PropTypes.func,
};

export default WalletSelect;
