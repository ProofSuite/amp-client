import React from 'react';
import { Spinner } from '@blueprintjs/core';
const Loading = ({ height }) => (
  <div className="loading-overlay">
    <Spinner intent="primary" />
  </div>
);

export default Loading;
