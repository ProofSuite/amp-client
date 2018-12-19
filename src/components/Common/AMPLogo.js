//@flow
import React from 'react';
import styled from 'styled-components';
import { Box } from './Box'
import ampLogo from '../../assets/amp_black.png'

const AMPLogo = (props: { height: number, width: number }) => {
    const { height, width } = props

  return (
    <Wrapper>
      <Box p={3}>
        <img src={ampLogo} class="Profile-image" width={width} height={height} alt=""/>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  opacity: 0.3;
`;

export default AMPLogo
