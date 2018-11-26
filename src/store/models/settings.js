// @flow
import { getAccountDomain, getSettingsDomain } from '../domains';

import type { State } from '../../types';

export default function settingsPageSelector(state: State) {
  let accountDomain = getAccountDomain(state)

  return {
    authenticated: accountDomain.authenticated(),
    pvtKeyLocked: getSettingsDomain(state).pvtKeyLocked(),
  };
}
