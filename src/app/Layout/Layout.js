// @flow
import type { Node } from 'react'
import React from 'react'
import Notifier from '../../components/Notifier'
import BlockNumber from '../../components/BlockNumber'
import ConnectionStatus from '../../components/ConnectionStatus'
import { IntlProvider } from 'react-intl'
import { Link, NavLink } from 'react-router-dom'
import { Footer } from '../../components/Common'

import styled from 'styled-components'
import {
  Alignment,
  Button,
  Menu,
  MenuDivider,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position
} from '@blueprintjs/core'

export type Props = {
  ETHBalance: string,
  WETHBalance: string,
  WETHAllowance: string,
  children?: Node,
  authenticated: boolean,
  accountLoading: boolean,
  address: string,
  locale: string,
  messages: string,
  currentBlock?: string,
}

export type State = {
}

class Layout extends React.PureComponent<Props, State> {

  render() {
    const {
      children,
      authenticated,
      address,
      locale,
      messages,
      currentBlock,
    } = this.props

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
    )

    return (
      <IntlProvider locale={locale} messages={messages}>
        <Wrapper>
          <Notifier />
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
                {currentBlock && <BlockNumber currentBlock={currentBlock} />}
                <ConnectionStatus authenticated={authenticated} />
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
    )
  }
}

const Wrapper = styled.div.attrs({ className: 'bp3-dark' })`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.header``

const MainContent = styled.main`
  flex: 1;
`

const NavbarHeaderLink = styled(Link).attrs({
  className: 'bp3-button bp3-minimal bp3-intent-primary',
  role: 'button'
})``

const NavbarLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: 'bp3-button bp3-minimal',
  role: 'button'
})``

const MenuItem = styled.li``

const MenuItemLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: props => `bp3-menu-item bp3-popover-dismiss bp3-icon-${props.icon}`,
  role: 'button'
})``


export default Layout