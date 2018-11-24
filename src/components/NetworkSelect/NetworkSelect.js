// @flow
import React from 'react';
import StandardSelect from './StandardSelect';

type Props = {
  networks: Array<Object>,
  handleChange: Object => void,
  networkID?: number,
};

class NetworkSelect extends React.PureComponent<Props> {
  render() {
    const { networks, networkID, handleChange } = this.props;
    const selectedNetwork = networks.find(network => network.id === networkID);

    return <StandardSelect items={networks} item={selectedNetwork} handleChange={handleChange} />;
  }
}

export default NetworkSelect;
