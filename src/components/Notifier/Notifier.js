import React from 'react';
import { Position, Toaster } from '@blueprintjs/core';

// eslint-disable-next-line
type Props = {
  lastNotification: Object,
  removeNotification: number => void,
};

class Notifier extends React.Component {
  show = notification => {
    let { intent, message } = notification;
    Notification.show({
      intent: intent || 'success',
      message: message,
    });
  };

  render() {
    let { lastNotification } = this.props;
    if (lastNotification) {
      lastNotification.id && this.show(lastNotification);
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    let { lastNotification, removeNotification } = prevProps;

    if (lastNotification) {
      console.log('lastNotification: ', lastNotification);
      removeNotification(lastNotification.id);
    }
  }
}

const Notification = Toaster.create({
  position: Position.TOP_RIGHT,
});

export default Notifier;
