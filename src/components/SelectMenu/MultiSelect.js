// @flow
import React from 'react';
import { MenuItem } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';

type Props = {
  indicators: Array<Object>,
  updateProps: (Array<Object>) => void,
  onChangeIndicator: Object => void,
};
type State = {
  indicators: Array<Object>,
};

export default class CustMultiSelect extends React.PureComponent<Props, State> {
  state = {
    indicators: this.props.indicators,
  };

  // silence-error: couldn't resolve built-in Func params
  itemRenderer(item: Object, { handleClick }) {
    return <MenuItem icon={item.active ? 'tick' : ''} onClick={handleClick} text={`${item.name}`} key={item.rank} />;
  }

  tagRenderer(item: Object) {
    return item.name;
  }
  onItemSelect = (e: Object) => {
    const { indicators } = this.state;
    this.props.onChangeIndicator(e);
    let currentIndicator = indicators[e.rank];
    currentIndicator.active = !currentIndicator.active;
    this.props.updateProps(indicators);
    this.forceUpdate();
  };

  getSelectedItem = () => {
    const { indicators } = this.state;
    return indicators.filter(item => item.active);
  };

  render() {
    const {
      props: { indicators },
      getSelectedItem,
      onItemSelect,
      itemRenderer,
      tagRenderer,
    } = this;
    return (
      <MultiSelect
        tagInputProps={{ placeholder: 'Indicators' }}
        itemRenderer={itemRenderer}
        tagRenderer={tagRenderer}
        items={indicators}
        resetOnSelect={true}
        selectedItems={getSelectedItem()}
        onItemSelect={onItemSelect}
      />
    );
  }
}
