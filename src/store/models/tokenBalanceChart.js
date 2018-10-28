import { getAccountBalancesDomain } from '../domains'

import type { State } from '../../types'

export default function tokenBalanceChartSelector(state: State) {
  return {
    tokenBalances: getAccountBalancesDomain(state).tokenChartBalances()
  }
}