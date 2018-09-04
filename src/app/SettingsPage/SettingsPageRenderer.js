import React from 'react';
import { Card, Button, Icon } from '@blueprintjs/core';
import { Footer, RowSpaceBetween, Colors } from '../../components/Common';
import styled from 'styled-components';

const SettingsPageRenderer = props => {
  const { pvtKeyLocked, togglePvtKeyLock, wallets, removeWallet } = props;
  const lockBtnLabel = pvtKeyLocked ? 'Unlock ' : 'Lock ';
  return (
    <Wrapper>
      <AccountInformation>
        <p>
          Name: UserName <Icon icon="badge" intent="primary" />
        </p>
        <p>Email: username@account.com</p>
      </AccountInformation>

      <LockPrivateKey>
        <Button minimal="true" text={lockBtnLabel + 'Private Key display on Wallet Page'} onClick={togglePvtKeyLock} />
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
          {wallets.slice(1).map(function(wallet) {
            return (
              <ListItem>
                {wallet.address} <Button minimal="true" onClick={removeWallet(wallet.address)} icon="cross" />
              </ListItem>
            );
          })}
        </List>
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
