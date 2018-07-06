// @flow
import React from 'react';
import ProviderSettingsRenderer from './ProviderSettingsRenderer';
import type { ProviderOptions } from '../../types/provider';

type Props = {
  setProvider: ProviderOptions => void,
};

type State = {
  loading: boolean,
  options: ProviderOptions,
};

class ProviderSettings extends React.PureComponent<Props, State> {
  state = {
    loading: false,
    options: {
      provider: '',
      type: '',
      websockets: false,
      networkId: 1,
      url: '',
    },
  };

  handleSubmit = (e: SyntheticEvent<>) => {
    e.preventDefault();
    this.disableButton();
    this.props.setProvider(this.state.options);
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ ...this.state, options: { ...this.state.options, [target.name]: value } });
  };

  handleNetworkChange = (network: Object) => {
    this.setState({ ...this.state, options: { ...this.state.options, networkId: network.id } });
  };

  disableButton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    return (
      <ProviderSettingsRenderer
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleNetworkChange={this.handleNetworkChange}
        disableButton={this.disableButton}
        networks={networks}
      />
    );
  }
}

const networks = [
  { name: '1 (Mainnet)', id: 1 },
  { name: '2 (Ropsten)', id: 2 },
  { name: '3 (Rinkeby)', id: 3 },
  { name: '4 (?)', id: 4 },
  { name: '1000 (Local Default TestRPC)', id: 1000 },
].map((m, index) => ({ ...m, rank: index + 1 }));

export default ProviderSettings;
