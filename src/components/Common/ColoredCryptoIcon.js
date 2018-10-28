import React from 'react';
import styled from 'styled-components';

const ColoredCryptoIcon = ({ name, size, color }) => <Icon size={size} color={color} className={'cc ' + name} />;

const Icon = styled.i`

  &:before{
    font-size: ${props => props.size+'px'} !important;
    color: ${props => props.color} !important;
    padding-right: 10px;
  }
`;

export default ColoredCryptoIcon;
