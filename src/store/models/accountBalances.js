import accountBalancesModel from '../domains/accountBalances';

export default function getAccountBalancesModel(state) {
  return accountBalancesModel(state.accountBalances);
}
