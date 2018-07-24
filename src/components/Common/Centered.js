import React from 'react';
import styled from 'styled-components';

const Centered = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Centered;
