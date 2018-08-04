import React from 'react';
import { AutoSizer } from 'react-virtualized';

function AutoScaler({ minHeight, minWidth, ratio, children }) {
  return (
    <AutoSizer disableHeight>
      {({ width }) => {
        return children({ width, ratio });
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
