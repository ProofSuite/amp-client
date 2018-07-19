import React from 'react';
import { IntlProvider } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Menu,
  MenuDivider,
  Popover,
  Position,
} from '@blueprintjs/core';

const Wrapper = styled.div.attrs({
  className: 'pt-dark',
})`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const MainContent = styled.main`
  flex: 1;
`;

const NavbarHeaderLink = styled(Link).attrs({
  className: 'pt-button pt-minimal pt-intent-primary',
  role: 'button',
})``;

const NavbarLink = styled(NavLink).attrs({
  activeClassName: 'pt-active',
  className: 'pt-button pt-minimal',
  role: 'button',
})``;

const MenuItem = styled.li``;

const MenuItemLink = styled(NavLink).attrs({
  activeClassName: 'pt-active',
  className: props => `pt-menu-item pt-popover-dismiss pt-icon-${props.icon}`,
  role: 'button',
})``;

function Layout({ children, defaultAccount, locale, messages }) {
  const menu = (
    <Menu>
      <MenuItem>
        <MenuItemLink to="/setting" icon="settings">
          Setting
        </MenuItemLink>
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
              <NavbarLink to="/exchange">Exchange</NavbarLink>
              <NavbarLink to="/settings">Settings</NavbarLink>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              {!defaultAccount ? (
                <NavbarLink to="/login">Login</NavbarLink>
              ) : (
                <Popover content={menu} position={Position.BOTTOM_RIGHT}>
                  <Button icon="key" text={defaultAccount} minimal />
                </Popover>
              )}
            </NavbarGroup>
          </Navbar>
        </Header>
        <MainContent>{children}</MainContent>
      </Wrapper>
    </IntlProvider>
  );
}

export default Layout;
