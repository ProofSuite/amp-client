import React from 'react';
import { Spinner } from '@blueprintjs/core';
const Loading = ({ height }) => (
  <div className="loading-overlay" style={height ? { height: height } : {}}>
    <Spinner />
  </div>
);

export default Loading;
