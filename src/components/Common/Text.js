//@flow
import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

export default styled.span`
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
  )}
`;

export const LargeText = styled.h3`
  color: ${props => (props.intent ? Colors[props.intent] : Colors.HEADING)} !important;
`;

export const Header = styled.h3`
  text-align: left;
  margin-bottom: auto;
  margin-top: auto;
`;

export const EmphasizedText = styled.span`
  color: ${Colors.LINK};
`;

export const MutedText = styled.span`
  color: ${Colors.TEXT_MUTED};
`;

export const HeaderText = ({ text, helperText }: *) => {
  return (
    <React.Fragment>
      <Header>
        {text}
        <MutedText>{helperText}</MutedText>
      </Header>
    </React.Fragment>
  );
};

export const LabelText = ({ children, helperText }: *) => {
  return (
    <React.Fragment>
      {children}
      <MutedText> {helperText} </MutedText>
    </React.Fragment>
  );
};
