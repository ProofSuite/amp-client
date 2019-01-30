// @flow
import { getAccountDomain, getSettingsDomain } from '../domains';

import type { State } from '../../types';

export default function settingsPageSelector(state: State) {
  let { authenticated } = getAccountDomain(state)
  let { pvtKeyLocked } = getSettingsDomain(state)

  return {
    authenticated,
    pvtKeyLocked,
  };
}
