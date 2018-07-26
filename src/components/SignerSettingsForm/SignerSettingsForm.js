// @flow
import React from 'react';
import SignerSettingsFormRenderer from './SignerSettingsFormRenderer';
import type { SignerSettings, UpdateSignerParams } from '../../types/signer';

type Props = {
  loading: boolean,
  error: string,
  currentSigner: SignerSettings,
  updateSigner: UpdateSignerParams => void,
};

type State = {
  type: 'metamask' | 'wallet' | 'rpc' | 'custom',
  custom: boolean,
  customType: 'wallet' | 'rpc',
  url: ?string,
  networkId: number,
  wallet: Object,
};

class SignerSettingsForm extends React.PureComponent<Props, State> {
  state = {
    type: 'metamask', //metamask or rpc or wallet/infura or custom
    custom: false,
    customType: 'wallet',
    networkId: 1,
    url: '',
    wallet: {},
  };

  handleSubmit = (e: SyntheticEvent<>) => {
    e.preventDefault();
    let { type, custom, url, customType, networkId, wallet } = this.state;
    if (type === 'custom') type = customType;
    this.props.updateSigner({
      custom: custom,
      type: type,
      url: url,
      networkId: networkId,
      wallet: wallet,
    });
  };

  handleChange = ({ target }: SyntheticInputEvent<>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    target.name === 'type' && this.setState({ custom: target.value === 'custom' });
    this.setState({ [target.name]: value });
  };

  handleNetworkChange = (network: Object) => {
    this.setState({ networkId: network.id });
  };

  render() {
    const { loading, error, currentSigner } = this.props;
    const { type, custom, customType, url, networkId, wallet } = this.state;

    return (
      <SignerSettingsFormRenderer
        loading={loading}
        error={error}
        type={type}
        url={url}
        custom={custom}
        networkId={networkId}
        customType={customType}
        currentSigner={currentSigner}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleNetworkChange={this.handleNetworkChange}
        networks={networks}
        wallet={wallet}
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

export default SignerSettingsForm;
