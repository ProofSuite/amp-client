import React from 'react';
import { RangeSlider } from '@blueprintjs/core';

export default class StandardRangeSlider extends React.Component {
  state = {
    value: [8, 10],
  };
  onChange = value => {
    this.setState({ value });
  };

  onRelease = value => {};

  render() {
    const {
      state: { value },
      labelRenderer,
      onChange,
      onRelease,
    } = this;
    return (
      <RangeSlider
        className="standard-range-slider"
        min={0}
        onRelease={onRelease}
        onChange={onChange}
        showTrackFill={true}
        value={value}
        max={10}
      />
    );
  }
}
