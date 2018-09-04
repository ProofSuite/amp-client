// @flow
import { getSettingsDomain } from '../domains';

import type { State, ThunkAction } from '../../types';

export default function settingsPageSelector(state: State) {
  return {
    pvtKeyLocked: getSettingsDomain(state).pvtKeyLocked(),
  };
}
