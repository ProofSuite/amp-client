// @flow
import { connect } from 'react-redux';
import { createWallet } from '../../store/models/createWalletForm';

export const mapDispatchToProps = { createWallet };

export default connect(
  null,
  mapDispatchToProps
);
