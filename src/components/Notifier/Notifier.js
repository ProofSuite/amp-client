import React from 'react';
import { Position, Toaster } from '@blueprintjs/core';

type Props = {
  lastNotification: Object,
  removeNotification: number => void,
};

class Notifier extends React.Component {
  show = notification => {
    let { id, type, message } = notification;
    Notification.show({
      intent: type || 'success',
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
      removeNotification(lastNotification.id);
    }
  }
}

const Notification = Toaster.create({
  position: Position.TOP_RIGHT,
});

export default Notifier;