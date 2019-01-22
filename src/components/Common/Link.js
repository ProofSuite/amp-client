// @flow 
import React from 'react'

type Props = {
  url: string,
  children: React.Node
}

const Link = ({ url, children }: Props) => {
  return (
    <a href={url} 
       rel="noopener noreferrer"
       target="_blank" 
    >
      {children}
    </a>
  )
}

export default Link