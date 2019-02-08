import styled from 'styled-components';
import { 
  space, 
  width,  
  fontSize, 
  color, 
  textAlign, 
  lineHeight, 
  fontWeight, 
  letterSpacing,
  alignItems,
  alignContent,
  justifyContent,
  flexBasis,
  flexDirection,
  flex,
  flexWrap,
  justifyItems,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  border,
  justifySelf,
  alignSelf,
  textColor,
  bgColor,
  fontFamily,
  fontStyle,
  height,
  maxHeight,
  minHeight,
  sizeHeight,
  display,
  size,
  verticalAlign,
  } from 'styled-system';

import { Divider } from '@blueprintjs/core'

import {
  Devices
} from './Variables'


export const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}

  @media ${Devices.mobileS} {
    ${props => props.hideOnMobileS && "display: none !important;" }
  }

  @media ${Devices.mobileM} {
    ${props => props.hideOnMobileM && "display: none !important;" }
  }

  @media ${Devices.mobileL} {
    ${props => props.hideOnMobile && "display: none !important;" }
  }

  @media ${Devices.tablet} {
    ${props => props.hideOnTablet && "display: none !important;" }
  }
`;

export const InlineBox = styled.span`
  ${space}
  ${width}
  ${height}
  ${color}

  @media ${Devices.mobileS} {
    ${props => props.hideOnMobileS && "display: none;" }
  }

  @media ${Devices.mobileM} {
    ${props => props.hideOnMobileM && "display: none;" }
  }

  @media ${Devices.mobileL} {
    ${props => props.hideOnMobile && "display: none;" }
  }

  @media ${Devices.tablet} {
    ${props => props.hideOnTablet && "display: none;" }
  }
`;

export const DividerBox = styled(Divider)`
  ${space}
  ${width}
  ${height}
  ${color}
`

export const TextBox = styled(Box)`
  ${fontSize}
  ${textAlign}
  ${justifySelf}
  ${alignSelf}
`

export const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${alignContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
`

export const FlexRow = styled(Box)`
  display: flex;
  flex-direction: row;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flex}
`

export const FlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flex}
`

export const FlexRowWrap = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
`

export const FlexColumnWrap = styled(Box)`
  display: flex;
  flex-direction: row;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
`

export const FlexRowSpaceBetween = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
`

export const FlexRowSpaceAround = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}  
`

export const FlexItem = styled.div`
  ${flex}
  ${justifySelf}
  ${alignSelf}
`