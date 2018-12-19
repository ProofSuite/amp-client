import React from 'react';
import styled from 'styled-components';

import {
  space,
  width,
  height,
  color
} from 'styled-system'

const Centered = props => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Centered;
