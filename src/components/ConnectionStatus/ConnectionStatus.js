import React from 'react'
import { SvgIcon } from '../../components/Common'

import styled from 'styled-components'

const ConnectionStatus = (props: Props) => {
  const {
    isConnected,
    isInitiated,
  } = props;

  return (
    <ConnectionStatusBox>
      <SvgIcon
        width="20px"
        icon="connect-signal"
        intent={isConnected ? 'success' : isInitiated ? 'error' : 'warning'}
      />
      <span>{isConnected ? 'Connected' : isInitiated ? 'Disconnected' : 'Initializing'}</span>
    </ConnectionStatusBox>
  )
}


const ConnectionStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    margin-left: 10px;
    margin-right: 30px;
  }
`

export default ConnectionStatus