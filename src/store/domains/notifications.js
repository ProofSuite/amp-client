import type { NotificationState } from '../../types/notifications';

// eslint-disable-next-line
let id = 0;
const initialState = {};

export const initialized = () => {
  const event = (state: SettingsState = initialState) => state;
  return event;
};

export const notificationAdded = options => {
  const event = (state: NotificationState) => {
    if (state.length > 0) {
      if (state.filter(notification => notification.id !== options.id).length > 0) {
        state = [
          {
            id: options.id,
            message: options.message,
            intent: options.intent,
          },
        ];
      }
    } else {
      state = [
        {
          id: options.id,
          message: options.message,
          intent: options.intent,
        },
      ];
    }
    return state;
  };

  return event;
};

export const notificationRemoved = id => {
  const event = state => {
    if (Object.values(state) > 0 || typeof state === typeof []) {
      state = state.filter(notification => notification.id !== id);
      return state;
    }
    return state;
  };

  return event;
};

export default function model(state: NotificationState) {
  return {
    byId: () => state,
    last: () => state[state.length - 1],
  };
}
