import React from 'react'
import styled from 'styled-components'

type Props = {
  currentBlock: number
}

const BlockNumber = ({ currentBlock }: Props ) => {
  return (
    <Block>
      <span>Current Block: </span>
      <a href={'https://etherscan.io/block/' + currentBlock} target="_blank">
        {currentBlock}
      </a>
    </Block>
  )
}

export default BlockNumber

const Block = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  & span {
    margin-right: 5px;
  }
`