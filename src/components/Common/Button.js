import styled from 'styled-components';

import { 
  space,
  width,
  height,
} from 'styled-system'

import Colors from './Colors'
import { Button } from '@blueprintjs/core';


export const BlueGlowingButton = styled(Button)`
  ${space}
  ${width}
  ${height}

  box-shadow: ${"0 3px 20px " + Colors.BLUE1 + "!important;"}
  &hover: {
    background-color: ${Colors.BLUE5}
    box-shadow: ${"0 3px 20px " + Colors.BLUE5 + "!important;"}
  }
`

export const GreenGlowingButton = styled(Button)`
  ${space}
  ${width}
  ${height}

  box-shadow: ${"0 3px 20px " + Colors.GREEN1 + "!important;"}
  &hover: {
    background-color: ${Colors.GREEN5}
    box-shadow: ${"0 3px 20px " + Colors.GREEN5 + "!important;"}
  }
`

export const RedGlowingButton = styled(Button)`
  ${space}
  ${width}
  ${height}

    box-shadow: ${"0 3px 20px " + Colors.RED1 + "!important;"}
  &hover: {
    background-color: ${Colors.RED5}
    box-shadow: ${"0 3px 20px " + Colors.RED5 + "!important;"}
  }
`