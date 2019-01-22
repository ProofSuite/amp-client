// @flow
import { connect } from 'react-redux';
import getmarketsPageSelector, {
  queryMarketData
} from '../../store/models/marketsPage';

import type { State } from '../../types'

type OwnProps = {
  toggleMarketStatistics: void => void
}


export function mapStateToProps(state: State, ownProps: OwnProps) {
  let marketsPageSelector = getmarketsPageSelector(state)

  return {
    ...marketsPageSelector,
    ...ownProps
  }
}

export const mapDispatchToProps = {
  queryMarketData
};

export default connect(mapStateToProps, mapDispatchToProps)
