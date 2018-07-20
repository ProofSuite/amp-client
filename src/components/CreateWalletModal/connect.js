// @flow
import { connect } from 'react-redux';
import { createWallet } from '../../store/models/createWallet';

export const mapDispatchToProps = {
  createWallet,
};

export default connect(
  null,
  mapDispatchToProps
);
