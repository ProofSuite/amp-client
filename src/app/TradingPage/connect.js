// @flow
import { connect } from 'react-redux';
import { queryDefaultData } from '../../store/models/tradingPage';

export const mapDispatchToProps = {
  queryDefaultData,
};

export default connect(
  null,
  mapDispatchToProps
);
