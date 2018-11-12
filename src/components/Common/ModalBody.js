import React from 'react'
import { Classes } from '@blueprintjs/core'

const ModalFooter = (props) => {
  return (
    <div className={Classes.DIALOG_BODY}>
      {props.children}
    </div>
  )
}

export default ModalFooter