import React from 'react';
import { Button, Collapse } from '@blueprintjs/core';

class DownCollapse extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState(function(prevState) {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const {
      state: { isOpen },
      props: { content, title },
      toggleCollapse,
    } = this;
    return (
      <div className={isOpen ? 'horizontal-collapse is-open' : 'horizontal-collapse is-closed'}>
        <Button fill={true} intent="primary" onClick={toggleCollapse} icon={isOpen ? 'chevron-down' : 'chevron-right'}>
          {isOpen ? 'Hide' : 'Show'} {title}
        </Button>
        <Collapse isOpen={isOpen}>{content}</Collapse>
      </div>
    );
  }
}
export default DownCollapse;
