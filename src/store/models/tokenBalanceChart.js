import { getAccountBalancesDomain } from '../domains'

import type { State } from '../../types'

export default function tokenBalanceChartSelector(state: State) {
  return {
    balancesLoading: getAccountBalancesDomain(state).loading(),
    tokenBalances: getAccountBalancesDomain(state).tokenChartBalances()
  }
}