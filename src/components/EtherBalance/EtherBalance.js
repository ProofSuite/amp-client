import React from 'react';

type Props = {
  /**
   * Wallet address
   */
  address: string,

  /**
   * Balance of the wallet
   */
  balance: string,

  /**
   * Check if the subscription is made already
   */
  isSubscribed: boolean,

  /**
   * Loading message when the balance is not yet ready
   */
  loadingMessage?: string,
};

/**
 * Placeholder component for ether balance
 */
class EtherBalance extends React.PureComponent<Props> {
  subscribe() {
    if (this.props.isSubscribed) {
      return;
    }

    this.unsubscribeBalance = this.props.subscribeBalance();
  }

  unsubscribe() {
    if (typeof this.unsubscribeBalance !== 'function') {
      return;
    }

    this.unsubscribeBalance();
  }

  componentDidMount() {
    this.subscribe();
  }

  componentDidUpdate(prevProps) {
    const addressChanged = prevProps.address !== this.props.address;
    const justUnsubscribed = prevProps.isSubscribed && !this.props.isSubscribed;

    if (addressChanged || justUnsubscribed) {
      this.unsubscribe();
      this.subscribe();
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { balance, loadingMessage } = this.props;

    return <React.Fragment>{balance === null ? loadingMessage : balance}</React.Fragment>;
  }
}

export default EtherBalance;
