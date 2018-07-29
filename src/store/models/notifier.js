// @flow
import { getNotificationsDomain } from '../domains';
import type { State } from '../../types';

export default function notificationsSelector(state: State) {
  return {
    lastNotification: getNotificationsDomain(state).last(),
  };
}
