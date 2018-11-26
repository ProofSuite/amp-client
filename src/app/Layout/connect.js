//@flow
import { connect } from 'react-redux';
import layoutSelector, { queryAccountData } from '../../store/models/layout';

import type { State } from '../../types'
import type { Props as LayoutProps } from './Layout'

export function mapStateToProps(state: State, props: Object): LayoutProps {
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
  queryAccountData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
