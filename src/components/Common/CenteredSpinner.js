//@flow
import React from 'react';
import styled from 'styled-components';
import { Spinner } from '@blueprintjs/core';

const SpinnerContainer = () => {
  return (
    <Wrapper>
      <Spinner large intent="primary" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default SpinnerContainer;
