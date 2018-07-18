// @flow
import { connect } from 'react-redux';
import { createWallet } from '../../store/models/wallet';

export const mapDispatchToProps = {
  createWallet,
};

export default connect(
  null,
  mapDispatchToProps
);
