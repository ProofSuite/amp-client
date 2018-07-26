// @flow
import { connect } from 'react-redux';
import getSignerSettingsModel, * as actionCreators from '../../store/models/signerSettings';

import type { State, Dispatch } from '../../types';
import type { UpdateSignerParams } from '../../types/signer';

export function mapStateToProps(state: State) {
  const signer = getSignerSettingsModel(state);

  return {
    loading: signer.isLoading(),
    error: signer.getError(),
    currentSigner: signer.getCurrentSigner(),
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateSigner: (params: UpdateSignerParams) => dispatch(actionCreators.updateSigner(params)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
