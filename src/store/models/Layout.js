import walletModel from '../domains/wallet';

export default function createSelector(state) {
  return walletModel(state.wallet);
}
