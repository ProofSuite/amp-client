//@flow
import React from 'react';
import styled from 'styled-components';
import Box from './Box'

const CenteredMessage = (props: { message: string }) => {
  return (
    <Wrapper>
      <Box p={3}>
        <p>{props.message}</p>
      </Box>
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

export default CenteredMessage;
