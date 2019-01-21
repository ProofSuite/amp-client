import React from 'react'
import { Classes } from '@blueprintjs/core'

import { Box } from './Box'

const ModalBody = (props) => {
  return (
    <Box className={Classes.DIALOG_BODY} {...props}>
      {props.children}
    </Box>
  )
}

export default ModalBody