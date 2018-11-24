import React from 'react'
import { Classes } from '@blueprintjs/core'

const ModalFooter = (props) => {
  return (
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        {props.children}
      </div>
    </div>
  )
}

export default ModalFooter