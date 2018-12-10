//@flow
import { connect } from 'react-redux';
import layoutSelector, { createProvider } from '../../store/models/layout';

import type { State } from '../../types'

export function mapStateToProps(state: State, props: Object) {
  const selector = layoutSelector(state);

  return {
    ETHBalance: selector.ETHBalance,
    WETHBalance: selector.WETHBalance,
    WETHAllowance: selector.WETHAllowance,
    authenticated: selector.authenticated,
    address: selector.address,
    accountLoading: selector.accountLoading,
    locale: 'TODO',
    messages: 'TODO'
  };
}

const mapDispatchToProps = {
  createProvider
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
