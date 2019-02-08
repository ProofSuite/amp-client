import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring'


import { 
  Box, 
  Link,
  Paragraph,
  EmphasizedText
} from "../../components/Common"

import {
  Devices
} from '../../components/Common/Variables'

import FaqItem from './FaqItem';

class FaqPage extends React.PureComponent {
  render() {
    const { match } = this.props;

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => 
      <Container style={props}>
        <h1>AMP Knowledge Base</h1>
        <FaqGrid>
          <FirstColumn>
          <FaqItem
            question="What is AMP ?"
            match={match}
          >
            AMP is a community-owned marketplace and decentralized exchange built on the Ethereum blockchain.
            AMP trades are settled directly between the two exchanging parties without any intermediates. We do not 
            hold any funds and have no ability to do so. With AMP, you can trade any ERC20 Ethereum token whether they
            represent native Ethereum tokens or are tethered tokens representing other cryptocurrencies or fiat currencies.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Are there fees ?"
            match={match}
          >
            Contrary to most exchanges that take a percentage of each transaction value, AMP trades only cost a fixed amount
            that include the gas fees. The trading is denominated in the quote currency of the traded pair. For example, when trading
            the ETH/USDC pair, each trade will cost 0.5 USDC when completely matched. The current fees for each quote token at the time
            of this writing are 0.5 USDC (for USDC pairs), 0.5 DAI (for DAI pairs) and 0.004 WETH (for WETH pairs).
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="How is AMP different from an exchange like Binance or Coinbase ?"
            match={match}
          >
            Unlike custodial and centralized exchanges, AMP does not hold any funds nor secret keys. You can deposit and withdraw
            your funds immediately and your account can not be compromised by a disgruntled employee or a database hack.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="What is my ETH wallet balance ? ETH trading balance?"
            match={match}
          >
            <EmphasizedText bold>Short answer</EmphasizedText>
              <br />
              <br />
              <div>
                <li>Your ETH wallet balance is your normal ETH balance.</li>
                <li>We recommend that you leave some ETH in your wallet if you need to make an 
                an Ethereum transaction for example</li>
                <li>Your ETH trading balance is the amount of ETH that can be used for placing orders on AMP.</li>
                <li>You can not use your ETH trading balance for paying gas fees</li>
                <li>You can move ETH between your wallet and your trading account at any time (Proofsuite does not hold any funds)</li>
              </div>
              <br />
              <br />
              <EmphasizedText bold>Detailed answer</EmphasizedText>
              <br />
              <br />
              <div>
                <li>Ether or ETH is the native currency of the Ethereum blockchain.</li>
                <li>WETH is a tokenized version of ETH that implements the ERC20 standard. </li>
                <li>When you deposit ETH into your trading account, you convert ETH into WETH. </li>
              </div>
              <br />
              <p>
                As other decentralized exchanges, AMP uses WETH to improve user experience. We also choose to not make the distinction 
                between ETH and WETH on the user interface to further improve user experience for people that are not familiar with WETH.
                You can convert any amount of ETH into WETH or any amount of WETH into ETH at any time (Proofsuite does not control WETH funds and can not prevent you from withdrawing your funds).
                When you are converting ETH to WETH, you receive 1 WETH token for each Ether you've converted.
                Using WETH allows decentralized applications such as the AMP decentralized exchanges to offer better functionality and a better user experience.
                You can read more about WETH <Link url={"https://weth.io/"}>here</Link>.
              </p>
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Why do i need to unlock tokens before trading?"
            match={match}
          >
            Unlocking tokens allows the Proof smart contracts to execute trades while your tokens remain in your wallet. In order to trade a token pair, you must unlock both tokens for that token pair. For example, if you are trading the MKR/USDC pair you will need to unlock
            trading for both the MKR token and the USDC token.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Will you be adding more features to AMP?"
            match={match}
          >
            Yes! Here are some of the things we are currently working on:
            <FaqList>
              <FaqListItem>• Improved usability and bug fixes</FaqListItem>
              <FaqListItem>• A mobile version of the site</FaqListItem>
              <FaqListItem>• More tokens pairs including stablecoins, tethered assets and financial instruments (shorts, options)</FaqListItem>
              <FaqListItem>• Prediction Markets</FaqListItem>
              <FaqListItem>• Enhanced charting</FaqListItem>
            </FaqList>
            Any features you think we should add ? Let us know! support@proofsuite.com
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="How do I setup an AMP account?"
            match={match}
          >
            Getting started with trading on AMP is easy! If you do not currently have an Ethereum wallet, you 
            can go to amp.exchange and click "Create new wallet" among the suggested options on the login page and 
            we'll walk you through the steps required to create your Ethereum address. 
            <br /><br />
            The current preferred and most secure way to use AMP is to connect with your Metamask account. Click
            the link that will be displayed on amp.exchange/login to install the Metamask browser extension and start trading.
            <br />
            Now that you are connected, you will be redirected to your wallet page. Here is a quick rundown of the basic actions needed
            to start trading:
            <br />
            <FaqList>
              <FaqListItem>• If you do not own any tokens or Ether, you have to send some Ether to your wallet.</FaqListItem>
              <FaqListItem>• If you have Ether in your account and want to trade /ETH pairs, you will need to deposit some Ether into your Trading Account</FaqListItem>
              <FaqListItem>• To start trading a token pair, you need to unlock both tokens on the wallet page. Click the switch on the corresponding token row on the wallet page</FaqListItem>
            </FaqList>
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Do i need a pre-existing ethereum wallet to use AMP ?"
            match={match}
          >
            No. You can click the "Create new wallet" option on the login page. However we recommend downloading Metamask for the
            most secure trading experience.
          </FaqItem>

          <Box p={2} />
          <FaqItem
            question="How can i cancel an order ?"
            match={match}
          >
            If your order has not been matched yet, you can cancel your order by clicking the cancel button on the Orders table on the trading page.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Do I need PRFT tokens to pay network fees ?"
            match={match}
          >
            No, contrary to a some other decentralized exchange protocols, you do not need PRFT tokens or any special token to trade on AMP.
          </FaqItem>
          <Box p={2} />
          </FirstColumn>
          <SecondColumn>
          <Box p={2} />
          <FaqItem
            question="How do i contact Proofsuite ?"
            match={match}
          >
            Write us anytime: support@proofsuite.com
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Is AMP fully decentralized ?"
            match={match}
          >
            AMP is a hybrid decentralized exchange. We maintain the orderbook and match orders with each other. Trades are then settled on the Ethereum chain.
            This model allows up to provide a good user experience along with the benefits of centralized exchanges.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Can you explain how the PRFT token works ?"
            match={match}
          >
            Owner of Proof tokens are rewarded with a portion of the trading fees (and in the future, other Proofsuite decentralized products) proportional to 
            the amount of Proof tokens they own. To reclaim your trading fees, you need to make a transaction to the rewards contract which will be published 
            soon. Proofsuite currently owns 90% of the Proof tokens and thus receives a large part of the trading fees that is 
            mostly used for paying the Exchange gas fees. 
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="Do i have to pay gas fees to cancel an order like on other decentralized exchanges ?"
            match={match}
          >
            No. Contrary to most decentralized exchanges, making and canceling orders on the Proof decentralized exchange is free. You only pay the trade fee
            if the order is successfully settled on the Ethereum chain.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="I sent funds to the wrong address."
            match={match}
          >
            Unfortunately, blockchain transactions are irreversible, so if you accidentally send funds to the wrong address, 
            there's nothing we, or anyone else, can do to help you.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="How long will it take for my order to fill ?"
            match={match}
          >
            The AMP matching-engine matches orders fast. When your order is matched, the corresponding trade is sent to a queue that will settle the trade
            on the Ethereum chain as soon as possible. You will thus receive several messages: 
            <FaqList>
              <FaqListItem>1) An order matched message: Your order was successfully filled or partially filled and the corresponding transaction is waiting to be sent to the Ethereum chain.</FaqListItem> <br/>
              <FaqListItem>2) An order pending message: The transaction has been sent to the Ethereum chain and is currently pending. You can follow the transaction with the given Etherscan link.</FaqListItem><br/>
              <FaqListItem>3) An order success message: Your order was confirmed and settled on the Ethereum chain and you have receive your tokens</FaqListItem><br/>
            </FaqList>
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="How does AMP secure my funds ?"
            match={match}
          >
            Here are some facts about AMP security: 
            <FaqList>
              <FaqListItem>• We do not hold any of your Ether or tokens. They are all stored in your wallet on the Ethereum network and you can access them at anytime through any Ethereum client (think GUI) such as MyEtherWallet or Metamask. </FaqListItem>
              <FaqListItem>• The most secure way to trade on AMP is to use the Metamask wallet </FaqListItem>
              <FaqListItem>• If you choose log in without metamask, your secret key will be stored in the browser session storage and is deleted immediately at the end of the session (or also upon page refresh) </FaqListItem>
              <FaqListItem>• We do not have access to your private key. If you choose to do so, the only thing that will be stored after you leave the AMP website is your encrypted 
              Ethereum wallet if you choose to log in with your own wallet file, create your own wallet. You can delete the encrypted wallet from the browser storage at 
              anytime by deleting the corresponding address on the settings page. </FaqListItem>
              <FaqListItem>• All AMP source code can be read at https://github.com/Proofsuite </FaqListItem>
            </FaqList>
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="I forgot which address I used to login on AMP"
            match={match}
          >
            In case your wallet was stored in the browser storage, you can access it by using the "Saved wallet" login method after clicking "Wallet" on the login page.
            Otherwise, unfortunately, there's nothing we can do to help you.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="What is a limit order ?"
            match={match}
          >
            A limit order is an order placed to sell or buy a certain amount of tokens at a certain price or better. A limit order is not a market order, and thus may not 
            be executed if the price you've set cannot be met. The order will stay in the orderbook until it is completely filled or canceled.
          </FaqItem>
          <Box p={2} />
          <FaqItem
            question="How can I get involved ?"
            match={match}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque elementum dignissim ultricies.
            Fusce rhoncus ipsum tempor eros aliquam consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus elementum massa eget nulla aliquet sagittis.
            Proin odio tortor, vulputate ut odio in, ultrices ultricies augue.
            Cras ornare ultrices lorem malesuada iaculis.
            Etiam sit amet libero tempor, pulvinar mauris sed, sollicitudin sapien.
          </FaqItem>
          </SecondColumn>
        </FaqGrid>
      </Container>
      }
      </Spring>
    );
  }
}

const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
`

const FaqList = styled.ul`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`

const FaqListItem = styled.li`
  // padding: 10px;
`

const FaqGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;

  @media ${Devices.tablet} {
    grid-template-columns: 1fr;
  }
`;

const FirstColumn = styled.div``

const SecondColumn = styled.div``

export default FaqPage;
