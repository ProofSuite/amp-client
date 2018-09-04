// @flow
import type { Node } from 'react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';
import { SvgIcon, Footer } from '../../components/Common';
import styled from 'styled-components';
import {
  Alignment,
  Button,
  Menu,
  Icon,
  MenuDivider,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
} from '@blueprintjs/core';

type Props = {
  children?: Node,
  authenticated: boolean,
  address: string,
  locale: string,
  messages: string,
  currentBlock?: string,
  provider?: string,
};

function Layout(props: Props) {
  const { children, authenticated, address, locale, messages, provider, currentBlock } = props;
  const menu = (
    <Menu>
      <MenuItem>
        <MenuItemLink to="/">Current Account: {address}</MenuItemLink>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <MenuItemLink to="/logout" icon="log-out">
          Logout
        </MenuItemLink>
      </MenuItem>
    </Menu>
  );

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Wrapper>
        <Header>
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>
                <NavbarHeaderLink to="/">PROOF</NavbarHeaderLink>
              </NavbarHeading>
              <NavbarDivider />
              <NavbarLink to="/wallet">Wallet</NavbarLink>
              <NavbarLink to="/trade">Exchange</NavbarLink>
              <NavbarLink to="/settings">Settings</NavbarLink>
            </NavbarGroup>

            <NavbarGroup align={Alignment.RIGHT}>
              {currentBlock && (
                <Block>
                  <span>Current Block: </span>
                  <a href={'https://etherscan.io/block/' + currentBlock} target="_blank">
                    {currentBlock}
                  </a>
                </Block>
              )}
              <ProviderStatus>
                <SvgIcon
                  style={{ marginRight: '10px' }}
                  width="20px"
                  icon="connect-signal"
                  intent={provider ? 'success' : 'error'}
                />
                <p>{provider ? provider : 'Not Connected'}</p>
              </ProviderStatus>

              {!authenticated ? (
                <NavbarLink to="/login">Login</NavbarLink>
              ) : (
                <Popover content={menu} position={Position.BOTTOM_RIGHT} minimal>
                  <Button icon="key" text="Authenticated" />
                </Popover>
              )}
            </NavbarGroup>
          </Navbar>
        </Header>
        <MainContent>{children}</MainContent>
        <Footer />
      </Wrapper>
    </IntlProvider>
  );
}

export default Layout;

const Wrapper = styled.div.attrs({ className: 'bp3-dark' })`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const MainContent = styled.main`
  flex: 1;
`;

const ProviderStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  & p {
    margin: 0;
  }
`;

const Block = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  & span {
    margin-right: 5px;
  }
`;
const NavbarHeaderLink = styled(Link).attrs({
  className: 'bp3-button bp3-minimal bp3-intent-primary',
  role: 'button',
})``;

const NavbarLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: 'bp3-button bp3-minimal',
  role: 'button',
})``;

const MenuItem = styled.li``;

const MenuItemLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: props => `bp3-menu-item bp3-popover-dismiss bp3-icon-${props.icon}`,
  role: 'button',
})``;
