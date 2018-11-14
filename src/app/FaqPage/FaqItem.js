import React from 'react';
import styled from 'styled-components';
import { Collapse, AnchorButton } from "@blueprintjs/core";

class FaqItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    return (
      <Container>
        <AnchorButton minimal onClick={this.toggle} text={this.props.question} />
        <Collapse isOpen={this.state.isOpen}>
          <Message>{this.props.children}</Message>
        </Collapse>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 5px;
`;

const Message = styled.div`
  padding: 10px;
`;

export default FaqItem;
