import React from 'react';
import { Position, Toaster } from '@blueprintjs/core';

// eslint-disable-next-line
type Props = {
  lastNotification: Object,
  removeNotification: number => void,
};

class Notifier extends React.Component {
  show = ({ notificationType, options }) => {

    console.log('showing', notificationType, options)

    let notification = NotificationFactory(notificationType, options)
    Notification.show(notification);

    this.props.removeNotification(this.props.lastNotification.id);
  };

  render() {
    let { lastNotification } = this.props;
    if (lastNotification) lastNotification.id && this.show(lastNotification);

    return null;
  }



  componentDidUpdate(prevProps) {
    let { lastNotification, removeNotification } = prevProps;
    if (lastNotification) removeNotification(lastNotification.id);
  }
}


//TODO refactor this
const NotificationFactory = (type, options) => {
  switch (type) {
    case "orderPending":
      return {
        action: {
          href: `https://rinkeby.etherscan.io/tx/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
            <React.Fragment>
              Your order is now pending. You will receive a notification when the transaction is confirmed<br/>
               Pair: {options.pair} <br/>
               Side: {options.side} <br/>
               Amount: {options.filled}/{options.amount} <br/>
               Price: {options.price}
            </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
        timeout: 0,
      }
    case "orderSuccess":
      return {
        action: {
          href: `https://rinkeby.etherscan.io/tx/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>,
        },
        message: (
          <React.Fragment>
             Your order has been successfully executed!<br/>
             Pair: {options.pair} <br/>
             Side: {options.side} <br/>
             Amount: {options.filled}/{options.amount} <br/>
             Price: {options.price}
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
        timeout: 0
      }
    case "orderAdded":
      return {
        message: 'Order Added',
        icon: 'tick',
        intent: 'success'
      }
    case "orderCancelled":
      return {
        message: 'Order Cancelled',
        icon: 'tick',
        intent: 'success'
      }
    default:
      return {
        message: options.message,
        intent: options.intent
      }
  }
}


const Notification = Toaster.create({
  position: Position.TOP_RIGHT,
});

export default Notifier;
