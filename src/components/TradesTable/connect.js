// @flow
import { connect } from 'react-redux';
import tradesTableSelector from '../../store/models/tradesTable';
import type { State } from '../../types';

type Props = {
  onCollapse: string => void
}

export const mapStateToProps = (state: State, ownProps: Props) => {
  let selector = tradesTableSelector(state)

  return {
    ...selector,
    ...ownProps
  }
};

export default connect(
  mapStateToProps,
  null
);
