import React from 'react';
import { Card, Button, Icon } from '@blueprintjs/core';
import { Footer, RowSpaceBetween, Colors } from '../../components/Common';
import styled from 'styled-components';

const SettingsPageRenderer = props => {
  const { pvtKeyLocked, togglePvtKeyLock, wallets, removeWallet } = props;
  const lockBtnLabel = pvtKeyLocked ? 'Unlock ' : 'Lock ';
  const walletsAreStored = wallets.slice(1).length > 0;
  return (
    <Wrapper>
      <LockPrivateKey>
        <Heading>Private Key display on Wallet Page</Heading>
        <Button minimal="true" text={lockBtnLabel} onClick={togglePvtKeyLock} />
      </LockPrivateKey>
      <ManageLocalStorageWallets>
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
      </ManageLocalStorageWallets>
    </Wrapper>
  );
};

export default SettingsPageRenderer;

const Wrapper = styled.div`
  padding: 20px;
`;
const AccountInformation = styled(Card)`
  margin-bottom: 20px;
`;
const LockPrivateKey = styled(Card)`
  margin-bottom: 20px;
  width: 500px;
`;
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
const ManageLocalStorageWallets = styled(Card)`
  width: 500px;
  margin-bottom: 20px;
`;
