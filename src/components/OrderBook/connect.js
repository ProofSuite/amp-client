// @flow
import { connect } from 'react-redux';
import orderBookSelector from '../../store/models/orderBook';
import { select } from '../../store/actions/orderBook';
import type { State } from '../../types';

type OwnProps = {
  direction: "vertical" | "horizontal",
  onCollapse: string => void
}

export const mapStateToProps = (state: State, ownProps: OwnProps) => {
  let selector = orderBookSelector(state);
  
  return { ...selector, ...ownProps };
};

export const mapDispatchToProps = {
  select,
};

export default connect(mapStateToProps, mapDispatchToProps);
