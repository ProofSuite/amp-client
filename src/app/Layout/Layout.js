// @flow
import React from 'react'
import styled from 'styled-components'
import { IntlProvider } from 'react-intl'
import { NavLink } from 'react-router-dom'
import Notifier from '../../components/Notifier'
import ampLogo from '../../assets/amp_black.png'
import ConnectionStatus from '../../components/ConnectionStatus'


import { 
  Footer, 
  NavbarHeading,
  NavbarGroup,
  NavbarDivider
   } from '../../components/Common'

import {
  Devices
} from '../../components/Common/Variables'

import { ReferenceCurrencySelect } from '../../components/SelectMenu'

import {
  Alignment,
  Button,
  Menu,
  Navbar,
  Popover,
  Position
} from '@blueprintjs/core'

import type { 
  Node,
} from 'react'

import type {
  Location
} from '../../types/common'

export type Props = {
  ETHBalance: string,
  WETHBalance: string,
  WETHAllowance: string,
  children?: Node,
  authenticated: boolean,
  accountLoading: boolean,
  address: string,
  locale: string,
  messages: { todo: string },
  currentBlock?: string,
  referenceCurrencies: Array<string>,
  updateReferenceCurrency: void => string,
  currentReferenceCurrency: string,
  createProvider: void => void,
  queryAppData: void => void,
  location: Location
}

type State = {}

class Layout extends React.PureComponent<Props, State> {

  componentDidMount() {
    this.props.createProvider()
    this.props.queryAppData()
  }

  render() {
    const {
      children,
      authenticated,
      locale,
      messages,
      referenceCurrencies,
      currentReferenceCurrency,
      updateReferenceCurrency,
      location
    } = this.props

    const showReferenceCurrency = authenticated
    const showLoginButton = (location !== "/login")

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
                    <img src={ampLogo} className="Profile-image" height={25} width={25} alt="AMP Logo" />
                  </NavbarHeaderBox>
                </NavbarHeading>
                {authenticated && <NavbarLink to="/wallet">Wallet</NavbarLink>}    
                {authenticated && <NavbarLink to="/markets">Markets</NavbarLink>}
                <NavbarLink to="/trade">Exchange</NavbarLink>
                {authenticated && <NavbarLink to="/settings" hideOnMobile>Settings</NavbarLink>}
                <NavbarLink to="/faq">FAQ</NavbarLink>
                <NavbarDivider hideOnMobile />
                {showReferenceCurrency &&
                  <ReferenceCurrencyBox>
                    <ReferenceCurrencySelect
                      items={referenceCurrencies}
                      item={currentReferenceCurrency}
                      handleChange={(item) => updateReferenceCurrency(item)}
                      type="text"
                    />
                  </ReferenceCurrencyBox>
                }                
              </NavbarGroup>
              <NavbarGroup align={Alignment.RIGHT}>
              {!authenticated && <NavbarLink to="/login">Login</NavbarLink>}
              {authenticated && (
                  <React.Fragment>
                    <ConnectionStatusBox>
                      <ConnectionStatus />
                    </ConnectionStatusBox>
                    <Popover content={menu} position={Position.BOTTOM_RIGHT} minimal>
                      <Button icon="key" text="Menu" />
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

  @media ${Devices.tablet} {
    display: none;
  }
`

const ReferenceCurrencyBox = styled.div`
  @media ${Devices.tablet} {
    display: none;
  }
`

const ConnectionStatusBox = styled.div`
  @media ${Devices.tablet} {
    display: none;
  }
`

const NavbarLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: 'bp3-button bp3-minimal',
  role: 'button'
})`

    @media ${Devices.mobileL} {
    ${props => props.hideOnMobile && "display: none;"}
  }
`

const MenuItem = styled.li``

const MenuItemLink = styled(NavLink).attrs({
  activeClassName: 'bp3-active bp3-intent-primary',
  className: props => `bp3-menu-item bp3-popover-dismiss bp3-icon-${props.icon}`,
  role: 'button'
})``


export default Layout
