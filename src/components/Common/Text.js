//@flow
import {
  space,
  width,
  textAlign,
  lineHeight,
  fontWeight,
  alignSelf,
  justifySelf,
} from 'styled-system'


import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Fonts } from './Variables'



export const Paragraph = styled.div.attrs({
  className: 'bp3-running-text'
})`
  ${space}
  ${width}
  ${textAlign}
  ${lineHeight}
  ${alignSelf}
  ${justifySelf}
  ${fontWeight}

  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
`;


export const Text = styled.div`
  ${space}
  ${width}
  ${textAlign}
  ${lineHeight}
  ${alignSelf}
  ${justifySelf}
  ${fontWeight}

  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
`;

export const XLText = styled.div.attrs({
  className: 'bp3-runnning-text'
})`
  ${space}
  ${width}
  ${textAlign}
  ${lineHeight}
  ${alignSelf}
  ${justifySelf}
  ${fontWeight}

  font-size: ${props => Fonts.FONT_SIZE_XL + 'px'};
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)};
`;


export const TextDiv = styled.div`
  ${space}
  ${width}
  ${textAlign}
  ${lineHeight}
  ${alignSelf}
  ${justifySelf}
  ${fontWeight}
  
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
`;

export const SmallText = styled.span`
  ${space}
  ${width}
  ${fontWeight}

  font-size: ${Fonts.FONT_SIZE_SMALL}px !important;
  color: ${props =>
    props.color
      ? props.color
      : props.intent
        ? Colors[props.intent]
        : props.muted
          ? Colors.TEXT_MUTED 
          : Colors.TEXT
  };
`;

export const SmallTextDiv = styled.div`
  ${space}
  ${width}
  ${fontWeight}

  font-size: ${Fonts.FONT_SIZE_SMALL}px !important;
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)};
`;
  


export const Header = styled.h2`
  ${space}
  ${width}
  ${fontWeight}

  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.muted
        ? Colors.TEXT_MUTED
        : props.color
          ? props.color
          : Colors.PRIMARY

  };

  line-height: 20px;
`

export const H2 = styled.h2`
  ${space}
  ${width}
  ${fontWeight}

  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.muted
        ? Colors.TEXT_MUTED
        : props.color
          ? props.color
          : Colors.WHITE
  };
`



export const LargeText = styled.h3`
  ${space}
  ${width}
  ${fontWeight}

  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.HEADING)}
`;

export const EmphasizedText = styled.span`
  ${space}
  ${width}
  ${fontWeight}

  font-weight: ${props => props.bold && "bold"}
  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${props => 
    props.alert
    ? Colors["danger"]
    : props.muted
      ? Colors.TEXT_MUTED
      : props.success
        ? Colors.SUCCESS
        : Colors.LINK};
`;


export const MutedText = styled.span`
  ${space}
  ${width}
  ${fontWeight}

  font-size: ${props => (props.small ? Fonts.FONT_SIZE_SMALL : props.large ? Fonts.FONT_SIZE_LARGE : Fonts.FONT_SIZE)}
  color: ${Colors.TEXT_MUTED};
`;

export const LinkText = styled.div`
  ${space}
  ${width}
  ${fontWeight}

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
