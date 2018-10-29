import React from 'react';
import { Card, Button } from '@blueprintjs/core';
import { Colors } from '../Common';
import styled from 'styled-components';

const WalletSettingsForm = props => {
  const { wallets, removeWallet } = props;
  const walletsAreStored = wallets.slice(1).length > 0;

  return (
    <Card>
      <Heading>Remove Wallets from Browser Storage</Heading>
      <Header>
        <ListItem>
          <p>
            <b>Address</b>
          </p>
          <p>
            <b>Remove</b>
          </p>
        </ListItem>
      </Header>
      <List>
        {wallets.slice(1).map(function(wallet, index) {
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
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default WalletSettingsForm;
