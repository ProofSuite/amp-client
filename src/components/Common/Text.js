//@flow
import {
  space,
  width,
  margin,
  padding,
} from 'styled-system'


import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Fonts } from './Variables'


export const Text = styled.span`
  ${space}
  ${width}
  ${margin}
  ${padding}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
  )}
`;

export const TextDiv = styled.div`
  ${space}
  ${width}
  ${margin}
  ${padding}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
  )}
`;


export const LargeText = styled.h3`
  ${space}
  ${width}
  ${margin}
  ${padding}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.HEADING)}
`;

export const Header = styled.h3`
  text-align: left;
  margin-bottom: auto;
  margin-top: auto;
`;

export const EmphasizedText = styled.span`
  ${space}
  ${width}
  ${margin}
  ${padding}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${Colors.LINK};
`;

export const MutedText = styled.span`
  ${space}
  ${width}
  ${margin}
  ${padding}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${Colors.TEXT_MUTED};
`;

export const LinkText = styled.span`
  ${space}
  ${width}
  ${margin}
  ${padding}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  cursor: pointer;
  color: ${Colors.LINK};
`


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
