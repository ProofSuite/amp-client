import etherBalanceModel from '../domains/etherBalance';
import * as actionCreators from '../actions/etherBalance';
import * as ether from '../services/ether';

export default function getModel(state) {
  return etherBalanceModel(state.etherBalance);
}

export function subscribeBalance(address) {
  return (dispatch, getState) => {
    const state = getState();
    const model = getModel(state);

    if (model.isSubscribed(address)) {
      return;
    }

    dispatch(actionCreators.subscribeBalance(address));

    const unsubscribe = ether.subscribeBalance(address, balance => {
      dispatch(actionCreators.updateBalance(address, balance));
    });

    return () => {
      unsubscribe();
      dispatch(actionCreators.unsubscribeBalance(address));
    };
  };
}
