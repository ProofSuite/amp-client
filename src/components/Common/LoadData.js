import React from 'react';

export default class LoadData extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const data = await this.props.getData();
    this.setState({ data });
  }
  render() {
    return this.props.children(this.state.data);
  }
}
