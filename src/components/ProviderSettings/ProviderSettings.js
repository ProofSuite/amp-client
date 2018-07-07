// @flow
import React from 'react';
import ProviderSettingsRenderer from './ProviderSettingsRenderer';
import type { ProviderOptions } from '../../types/provider';

type Props = {
  loading: boolean,
  error: string,
  currentProvider: ProviderOptions,
  setProvider: ProviderOptions => void,
};

type State = ProviderOptions;

class ProviderSettings extends React.PureComponent<Props, State> {
  state = {
    provider: '',
    type: '',
    networkId: 1,
    url: '',
  };

  handleSubmit = (e: SyntheticEvent<>) => {
    e.preventDefault();
    this.props.setProvider(this.state);
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ ...this.state, [target.name]: value });
  };

  handleNetworkChange = (network: Object) => {
    this.setState({ ...this.state, networkId: network.id });
  };

  render() {
    return (
      <ProviderSettingsRenderer
        options={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleNetworkChange={this.handleNetworkChange}
        networks={networks}
        currentProvider={this.props.currentProvider}
        error={this.props.error}
        loading={this.props.loading}
      />
    );
  }
}

const networks = [
  { name: 'Mainnet', id: 1 },
  { name: 'Ropsten', id: 3 },
  { name: 'Rinkeby', id: 4 },
  { name: 'Private', id: 1000 },
  { name: 'Private', id: 8888 },
].map((m, index) => ({ ...m, rank: index + 1 }));

export default ProviderSettings;
