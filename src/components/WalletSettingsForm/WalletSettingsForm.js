// @flow
import React from 'react';
import { Card, Button, Position } from '@blueprintjs/core';
import { Colors, FlexRow, Box } from '../Common';
import Help from '../Help'
import styled from 'styled-components';

import type { Wallet } from '../../types/wallets'
import type { Address } from '../../types/Common'

type Props = {
  wallets: Array<Wallet>,
  removeWallet: Address => void
}

const WalletSettingsForm = (props: Props) => {
  const { wallets, removeWallet } = props
  const walletsAreStored = wallets.length > 0

  return (
    <Card>
      <FlexRow>
        <Heading>Remove Encrypted Wallets from Browser Storage</Heading>
        <Box pl={2} pt={1}>
          <Help position={Position.RIGHT}>
            When you log in with your private key or with your wallet/password, your encrypted wallet
            is saved in the browser storage. You can keep the encrypted wallet in your browser storage 
            or remove it by clicking the corresponding address below.
          </Help>
        </Box>
      </FlexRow>
      <Header>
        <ListItem>
          <p><b>Address</b></p>
          <p><b>Remove</b></p>
        </ListItem>
      </Header>
      <List>
        {wallets.map(function(wallet, index) {
          return (
            <ListItem key={index}>
              {wallet.address}
              <Button minimal="true" onClick={() => removeWallet(wallet.address)} icon="cross" />
            </ListItem>
          );
        })}
      </List>
      {!walletsAreStored && <NotFound>No Wallet saved in Browser Storage.</NotFound>}
    </Card>
  );
};

const NotFound = styled.p`
  color: ${Colors.GRAY4};
  text-align: center;
`;

const Heading = styled.h3`
  color: ${Colors.GRAY4};
  margin-top: 0;
`;

const Header = styled.ul`
  margin: 0;
`;

const List = styled.ul`
  margin: 0;
  max-height: 220px;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  // width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default WalletSettingsForm;
