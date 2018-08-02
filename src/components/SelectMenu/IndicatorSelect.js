// @flow
import React from 'react';
import { MenuItem, Intent } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

type Indicator = {
  name: string,
  active: boolean,
  height: number,
  rank: number,
};

type Props = {
  indicators: Array<Indicator>,
  onUpdateIndicators: (Indicator, boolean) => void,
};
type State = {
  indicators: Array<Indicator>,
};

export default class CustomMultiSelect extends React.PureComponent<Props, State> {
  state = {
    indicators: this.props.indicators,
  };

  // silence-error: couldn't resolve built-in Func params
  itemRenderer(item: Object, { modifiers, handleClick }) {
    return <MenuItem icon={item.active ? 'tick' : ''} onClick={handleClick} text={`${item.name}`} key={item.rank} />;
  }

  tagRenderer(item: Indicator) {
    return item.name;
  }

  onItemSelect = (e: Indicator) => {
    const { indicators } = this.state;
    const active = !indicators[e.rank].active;

    this.props.onUpdateIndicators(e, active);
    this.setState({
      indicators: [...indicators.slice(0, e.rank), { ...indicators[e.rank], active }, ...indicators.slice(e.rank + 1)],
    });
  };

  handleTagRemove = (tag: string, index: number) => {
    const { indicators } = this.state;
    this.props.onUpdateIndicators(indicators[index], false);

    this.setState({
      indicators: [
        ...indicators.slice(0, index),
        { ...indicators[index], active: false },
        ...indicators.slice(index + 1),
      ],
    });
  };

  getSelectedItem = () => {
    const { indicators } = this.state;
    return indicators.filter(item => item.active);
  };

  render() {
    const {
      state: { indicators },
      getSelectedItem,
      onItemSelect,
      itemRenderer,
      tagRenderer,
    } = this;

    const getTagProps = (value: string, index: number) => ({
      intent: INTENTS[index % INTENTS.length],
      minimal: true,
    });

    return (
      <MultiSelect
        tagInputProps={{ tagProps: getTagProps, placeholder: 'Indicators', onRemove: this.handleTagRemove }}
        popoverProps={{ minimal: true }}
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
