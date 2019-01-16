import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { Collapse, H4, Card } from "@blueprintjs/core";
import { Text } from '../../components/Common'

function getId(question) {
  return question
      .replace(/[.?()]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .toLowerCase();
}

class FaqItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.message = React.createRef();
    this.renderItem = this.renderItem.bind(this);
  }

  scrollToItem() {
    if (!this.message || !this.message.current) {
      return;
    }

    setTimeout(() => {
      if (!this.message || !this.message.current) {
        return;
      }

      this.message.current.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  componentDidMount() {
    this.scrollToItem();
  }

  renderItem(route) {
    const { match, question, children } = this.props;

    return (
      <Container id={getId(question)}>
        <H4>
          <Link to={route.match ? match.url : `${match.url}/${getId(question)}`}>
            {question}
          </Link>
        </H4>
        <Collapse isOpen={route.match}>
          <Card ref={this.message}>
            <Text muted>{children}</Text>
          </Card>
        </Collapse>
      </Container>
    );
  }

  render() {
    const { match, question } = this.props;

    return (
      <Route path={`${match.url}/${getId(question)}`}>
        {this.renderItem}
      </Route>
    );
  }
}

const Container = styled.div`
  padding: 5px 5px 0 5px;
`;

export default FaqItem;
