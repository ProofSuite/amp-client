import React from 'react';
import { Classes, Popover, Tooltip } from "@blueprintjs/core";

function Help(props) {
  const {
    position,
    label,
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
        className={Classes.TOOLTIP_INDICATOR}
        // content={label}
        position={position}
        disabled={disabled}
      >
        ?
      </Tooltip>
    </Popover>
  );
}

Help.defaultProps = {
  label: 'Click to know more',
};

export default Help;
