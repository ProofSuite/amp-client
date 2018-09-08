// @flow
import { getSettingsDomain } from '../domains';

import type { State } from '../../types';

export default function settingsPageSelector(state: State) {
  return {
    pvtKeyLocked: getSettingsDomain(state).pvtKeyLocked(),
  };
}
