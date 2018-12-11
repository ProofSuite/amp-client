// @flow
import type { Node } from 'react'
import React from 'react'
import Notifier from '../../components/Notifier'
import ampLogo from '../../assets/amp_black.png'
import ConnectionStatus from '../../components/ConnectionStatus'

import { IntlProvider } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { Footer, Indent } from '../../components/Common'
import { ReferenceCurrencySelect } from '../../components/SelectMenu'

import styled from 'styled-components'
import {
  Alignment,
  Button,
  Menu,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
  Tag
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
  createProvider: () => {},
  referenceCurrencies: Array<string>,
  updateReferenceCurrency: void => string,
  currentReferenceCurrency: string,
}

type State = {}

class Layout extends React.PureComponent<Props, State> {

  componentDidMount() {
    this.props.createProvider()
  }

  render() {
    const {
      children,
      authenticated,
      address,
      locale,
      messages,
      referenceCurrencies,
      currentReferenceCurrency,
      updateReferenceCurrency,
    } = this.props

    const menu = (
      <Menu>
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
                  <NavbarHeaderBox>
                    <img src={ampLogo} class="Profile-image" height={25} width={25} alt="AMP Logo" />
                    <Indent />
                    <Tag minimal intent="success">BETA</Tag>
                  </NavbarHeaderBox>
                </NavbarHeading>
                {authenticated && (
                  <React.Fragment>
                    <NavbarDivider />
                    <NavbarLink to="/markets">Markets</NavbarLink>
                    <NavbarLink to="/wallet">Wallet</NavbarLink>
                    <NavbarLink to="/trade">Exchange</NavbarLink>
                    <NavbarLink to="/settings">Settings</NavbarLink>
                    <NavbarLink to="/faq">FAQ</NavbarLink>
                    <NavbarDivider />
                    <ReferenceCurrencySelect
                      items={referenceCurrencies}
                      item={currentReferenceCurrency}
                      handleChange={(item) => updateReferenceCurrency(item.name)}
                      type="text"
                    />
                  </React.Fragment>
                )}
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
                {!authenticated ? (
                  <NavbarLink to="/login">Login</NavbarLink>
                ) : (
                  <React.Fragment>
                    <ConnectionStatus />
                    <Popover content={menu} position={Position.BOTTOM_RIGHT} minimal>
                      <Button icon="key" text={address} />
                    </Popover>
                  </React.Fragment>
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
  width: 100%;
  
`

const NavbarHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

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
