import React from 'react';
import { AutoSizer } from 'react-virtualized';

function AutoScaler({ minHeight, minWidth, ratio, children }) {
  return (
    <AutoSizer>
      {({ width, height }) => {
        return children({ width, height, ratio });
      }}
    </AutoSizer>
  );
}

AutoScaler.defaultProps = {
  minHeight: 1,
  minWidth: 1,
  ratio: window.devicePixelRatio || 1,
};

export default AutoScaler;
