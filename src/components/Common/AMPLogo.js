//@flow
import React from 'react';
import styled from 'styled-components';
import { Box } from './Box'

const AMPLogo = (props: { height: number, width: number }) => {
    const { height, width } = props

  return (
    <Wrapper>
      <Box p={3}>
        <img src="amp_black.png" class="Profile-image" width={width} height={height} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  opacity: 0.3;
`;

export default AMPLogo
