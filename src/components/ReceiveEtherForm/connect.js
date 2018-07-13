// @flow
import { connect } from 'react-redux';

import getTokenModel from '../../store/models/tokens';
import getAccountModel from '../../store/models/account';
import getAccountBalancesModel, { subscribeBalance } from '../../store/models/accountBalances';

import type { State, Dispatch } from '../../types';

export const mapStateToProps = (state: State, props) => {
  const tokenModel = getTokenModel(state);
  const accountModel = getAccountModel(state);
  const accountBalancesModel = getAccountBalancesModel(state);

  console.log(accountBalancesModel.balances());

  return {
    step: props.step,
    balances: accountBalancesModel.balances(),
    address: accountModel.address(),
    tokens: tokenModel.rankedTokens(),
  };
};

export const mapDispatchToProps = {
  subscribeBalance,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

// one selected token -> were is the token selected ? in redux ? in component state ? in props ?

// were is the token selected ?

// -> redux ? ==> need another model/domain
// -> in component state ? ==> the redux connection doesn't know about the component state. we could send all the balances in the component ?
// -> in props ? how do we change the props ? maybe with some action handler, it does not seem clean

// the balance depends on this selected token

// were do we put the balance ? the balance should probably be stored in the token balance store
// no big question on this.

// but how do we synchnronize /

// we could pass the select tokens as props ?  not very clern

// different model for this form ?

// @flow
// import { connect } from 'react-redux';
// import getProviderModel, * as providerActionCreators from '../../store/models/provider';
// import type { State, Dispatch } from '../../types';
// import type { ProviderOptions } from '../../types/provider';

// export function mapStateToProps(state: State) {
//   const provider = getProviderModel(state);

//   return {
//     loading: provider.isLoading(),
//     error: provider.getError(),
//     currentProvider: provider.getCurrentProvider(),
//   };
// }

// export function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     setProvider: (options: ProviderOptions) => dispatch(providerActionCreators.setProvider(options)),
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
