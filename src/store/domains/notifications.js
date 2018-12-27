import type { NotificationState } from '../../types/notifications';

// eslint-disable-next-line
let id = 0;
const initialState = [];

export const initialized = () => {
  const event = (state: SettingsState = initialState) => state;
  return event;
};

export const notificationAdded = (notificationType, options) => {
  const event = (state: NotificationState) => {
    return [
      ...state,
      {
        id: ++id,
        notificationType,
        options
      },
    ];
  };

  return event;
};

export const successNotificationAdded = (message) => {
  const event = (state: NotificationState) => {
    return [
      ...state,
      {
        id: ++id,
        options: {
          intent: 'success',
          message: message
        }
      }
    ]
  }
  
  return event;
}

export const dangerNotificationAdded = (message) => {
  const event = (state: NotificationState) => {
    return [
      ...state,
      {
        id: ++id,
        options: {
          intent: 'danger',
          message: message
        }
      }
    ]
  }
  
  return event;
}

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
