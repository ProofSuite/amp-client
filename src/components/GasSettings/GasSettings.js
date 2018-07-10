import React from 'react';
import GasSettingsRenderer from './GasSettingsRenderer';

type State = {
  visible: boolean,
};

type Props = {
  gas: string,
  requiredGas: string,
  gasPrice: string,
  handleChange: (SyntheticInputEvent<>) => void,
};

class GasSettings extends React.PureComponent<Props, State> {
  state = { visible: false };

  toggleVisible = e => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;
    const { gas, gasPrice, requiredGas, handleChange } = this.props;

    return (
      <GasSettingsRenderer
        visible={visible}
        gas={gas}
        gasPrice={gasPrice}
        requiredGas={requiredGas}
        handleChange={handleChange}
        toggleVisible={this.toggleVisible}
      />
    );
  }
}

export default GasSettings;
