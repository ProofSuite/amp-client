import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

const CryptoIcon = ({ name }) => <Icon className={'cc ' + name} />;

const Icon = styled.i`
  color: ${Colors.LIGHT_GRAY4} !important;
`;

export default CryptoIcon;
