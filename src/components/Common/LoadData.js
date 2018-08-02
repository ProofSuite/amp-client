import React from 'react';
import { getData } from '../../store/services/homePage';

export default class LoadData extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const data = await getData();
    console.log(data);
    this.setState({ data });
  }
  render() {
    return this.props.children(this.state.data);
  }
}
