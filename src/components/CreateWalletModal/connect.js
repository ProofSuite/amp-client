// @flow
import { connect } from 'react-redux';
import { createWallet } from '../../store/models/createWalletModal';

export const mapDispatchToProps = { createWallet };

export default connect(
  null,
  mapDispatchToProps
);
