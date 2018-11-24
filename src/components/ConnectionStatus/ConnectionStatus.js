import React from 'react'
import { SvgIcon } from '../../components/Common'

import styled from 'styled-components'

const ConnectionStatus = ({ authenticated }: Props) => {
  return (
    <ConnectionStatusBox>
      <SvgIcon
        style={{ marginRight: '10px' }}
        width="20px"
        icon="connect-signal"
        intent={authenticated ? 'success' : 'error'}
      />
      <p>{authenticated ? 'Connected' : 'Not Connected'}</p>
    </ConnectionStatusBox>
  )
}


const ConnectionStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  & p {
    margin: 0;
  }
`

export default ConnectionStatus