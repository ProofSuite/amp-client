import React from 'react';
import { Position, Toaster } from '@blueprintjs/core';
import { formatNumber } from 'accounting-js'
import { ETHERSCAN_TX_URL } from '../../config/urls'

// eslint-disable-next-line
type Props = {
  lastNotification: Object,
  removeNotification: number => void,
};

class Notifier extends React.Component {
  show = ({ notificationType, options }) => {
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
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
            <React.Fragment>
              Your order is now pending. You will receive a notification when the transaction is confirmed<br/>
               Pair: {options.pair} <br/>
               Side: {options.side} <br/>
               Amount: { formatNumber(options.filled, { precision: 3 }) }/{ formatNumber(options.amount, { precision: 3 }) }<br/>
               Price: { formatNumber(options.price, { precision: 3 })}
            </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
        timeout: 30000,
      }
    case "orderSuccess":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>,
        },
        message: (
          <React.Fragment>
             Your order has been successfully executed!<br/>
             Pair: {options.pair} <br/>
             Side: {options.side} <br/>
             Amount: { formatNumber(options.filled, { precision: 3 }) }/{ formatNumber(options.amount, { precision: 3 }) }<br/>
             Price: { formatNumber(options.price, { precision: 3 })}
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
        timeout: 30000
      }
    case "orderAdded":
      return {
        message: 'Order Added',
        icon: 'tick',
        intent: 'success',
        timeout: 3000,
      }
    case "orderCancelled":
      return {
        message: 'Order Cancelled',
        icon: 'tick',
        intent: 'success',
        timeout: 5000,
      }
    case "orderMatched":
      return {
        message: 'Order Matched',
        icon: 'tick',
        intent: 'success',
        timeout: 3000,
      }
    case "unlockTokenPending":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            Unlocking {options.symbol}. You will be able to trade {options.symbol} after the transaction is confirmed.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "lockTokenPending":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            Locking {options.symbol}. You will not be able to trade {options.symbol} after the transaction is confirmed.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "unlockTokenConfirmed":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            {options.symbol} trading unlocked.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "lockTokenConfirmed":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            {options.symbol} trading locked.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "unlockPairPending":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            Unlocking {options.baseTokenSymbol}/{options.quoteTokenSymbol}. You will be able to trade after the transaction is confirmed.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "lockPairPending":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            Locking {options.baseTokenSymbol}/{options.quoteTokenSymbol}.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "unlockPairConfirmed":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            {options.baseTokenSymbol}/{options.quoteTokenSymbol} unlocked. You can now start trading.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
      }
    case "lockPairConfirmed":
      return {
        action: {
          href: `${ETHERSCAN_TX_URL}/${options.txHash}`,
          target: "_blank",
          text: <strong>View on Etherscan</strong>
        },
        message: (
          <React.Fragment>
            {options.baseTokenSymbol}/{options.quoteTokenSymbol} trading locked.
          </React.Fragment>
        ),
        icon: 'tick',
        intent: 'success',
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
