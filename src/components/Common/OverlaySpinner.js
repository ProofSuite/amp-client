//@flow
import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Spinner } from '@blueprintjs/core';

type Props = {
  visible: boolean,
  transparent: boolean,
};

const SpinnerContainer = ({ transparent, visible }: Props) => {
  return (
    <Wrapper visible={visible} transparent={transparent}>
      <Spinner large intent="primary" />
    </Wrapper>
  );
};

// height, width, top, left have slightly fixed values to cover dark lines
// that appear on the edges.
const Wrapper = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')}
  opacity: ${props => (props.transparent ? 0.95 : 1)};
  background-color: ${Colors.DARK_GRAY4};
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 98%;
  width: 98%;
  top: 2%;
  left: 2%;
  z-index: 100;
`;

export default SpinnerContainer;
