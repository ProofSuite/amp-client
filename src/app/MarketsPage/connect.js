// @flow
import { connect } from 'react-redux';
import getmarketsPageSelector, {
  queryMarketData
} from '../../store/models/marketsPage';

import type { State } from '../../types'


export function mapStateToProps(state: State ) {
  let marketsPageSelector = getmarketsPageSelector(state)

  return {
    ...marketsPageSelector
  }
}

export const mapDispatchToProps = {
  queryMarketData
};

export default connect(mapStateToProps, mapDispatchToProps)
