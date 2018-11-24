import React from 'react'

type Props = {
  authenticated: boolean,
  openConnection: void => void
}

class socketController extends React.Component<Props> {
  openConnection() {
    const { openConnection } = this.props
    //in case the connection is already set, nothing changes
    //otherwise we open the connection. openConnection() returns
    //the unsubscribe method to close the connection
    if (typeof this.unsubscribe !== 'function') {
      this.unsubscribe = openConnection()
    }
  }

  closeConnection() {
    if (typeof this.unsubscribe !== 'function') return

    this.unsubscribe()
    this.unsubscribe = null
  }

  componentDidMount() {
    if (this.props.authenticated) this.openConnection()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authenticated === this.props.authenticated) return

    this.props.authenticated ? this.openConnection() : this.closeConnection()
  }

  componentWillUnmount() {
    this.closeConnection()
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default socketController
