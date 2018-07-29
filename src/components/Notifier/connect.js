// @flow
import { connect } from 'react-redux';
import notifierSelector from '../../store/models/notifier';
import { removeNotification } from '../../store/actions/app';
import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return notifierSelector(state);
};

export const mapDispatchToProps = {
  removeNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
