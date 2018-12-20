import React from 'react';
import { Classes, Popover, Tooltip, Icon } from "@blueprintjs/core";
import { Colors } from '../Common'

function Help(props) {
  const {
    position,
    disabled,
    children,
  } = props;

  return (
    <Popover
      content={children}
      position={position}
      popoverClassName={Classes.POPOVER_CONTENT_SIZING}
      disabled={disabled}
    >
      <Tooltip
        position={position}
        disabled={disabled}
      >
        <Icon icon="help" color={Colors.GRAY1}/>
      </Tooltip>
    </Popover>
  );
}

Help.defaultProps = {
  label: 'Click to know more',
};

export default Help;
