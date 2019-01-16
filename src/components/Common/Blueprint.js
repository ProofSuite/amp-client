import React from 'react'
import styled from 'styled-components'

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

import { 
    Devices
} from './Variables'

// import {
//     Card as BluePrintCard,
//     NavbarHeading as BluePrintNavbarHeading,
//     NavbarGroup as BluePrintNavbarGroup,
//     NavbarDivider as BluePrintNavbarDivider,
// } from '@blueprintjs/core'

import * as Blueprint from '@blueprintjs/core'



const Styled = styled.div`
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
`

export const ComponentWrapper = (props) => {
    return (
        <Styled>{props.children}</Styled>
    )
}

// export const Card = (props) => {
//     return (
//         <ComponentWrapper {...props}>
//           <Blueprint.Card {...props}>
//             {props.children}
//           </Blueprint.Card>
//         </ComponentWrapper>
//     )
// }

export const NavbarDivider = styled(Blueprint.NavbarDivider)`
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
`

export const NavbarHeading = styled(Blueprint.NavbarHeading)`
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
`

export const NavbarGroup = styled(Blueprint.NavbarGroup)`
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
`


export const Card = styled(Blueprint.Card)`
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
`


export const Button = styled(Blueprint.Button)`
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
`