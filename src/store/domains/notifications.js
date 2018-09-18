import type { NotificationState } from '../../types/notifications';

// eslint-disable-next-line
let id = 0;
const initialState = [];

export const initialized = () => {
  const event = (state: SettingsState = initialState) => state;
  return event;
};

export const notificationAdded = options => {
  const event = (state: NotificationState) => {
    return [
      ...state,
      {
        id: options.id,
        message: options.message,
        intent: options.intent,
      },
    ];
  };

  return event;
};

export const notificationRemoved = id => {
  const event = (state: NotificationState) => {
    return state.filter(notification => notification.id !== id);
  };

  return event;
};

export default function model(state: NotificationState) {
  return {
    byId: () => state,
    last: () => state[state.length - 1],
  };
}
