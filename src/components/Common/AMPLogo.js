//@flow
import React from 'react';
import styled from 'styled-components';
import { Box } from './Box'
import ampLogo from '../../assets/amp_black.png'

const AMPLogo = (props: { height: number, width: number }) => {
    const { height, width } = props

  return (
    <Wrapper>
      <Container p={3}>
        {/* <div class="glitch-logo" /> */}
        <img src={ampLogo} width={width} height={height} alt=""/>
      </Container>
    </Wrapper>
  );
};

const Container = styled(Box)`
  z-index: 1;
  position: relative
`

const Wrapper = styled.div`
  opacity: 0.3;
`;

export default AMPLogo
