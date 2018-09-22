import React from 'react';
import { Card, Button } from '@blueprintjs/core';
import styled from 'styled-components';
import SendEtherModal from '../../components/SendEtherModal';
import { toPassowrdType } from '../../utils/helpers';

const CurrentWalletRenderer = props => {
  const {
    showPrivateKey,
    isModalOpen,
    handleModalClose,
    togglePrivateKey,
    privateKey,
    accountAddress,
    balance,
    pvtKeyLocked,
    gasPrice,
    gas,
  } = props;

  const displayPvtKey = showPrivateKey && !pvtKeyLocked;

  return (
    <WalletWrapper>
      <div>
        <CardTitle>Current Wallet</CardTitle>
        <Row>
          <h3>Balance: </h3>
          <h2>{balance} ETH</h2>
        </Row>
        <Row>
          <h3>Address: </h3>
          <p>{accountAddress}</p>
        </Row>
        <Row>
          <Button
            fill={true}
            style={{ marginBottom: '8px' }}
            onClick={handleModalClose}
            text="New Transaction"
            intent="primary"
          />
        </Row>
        <Row>
          <a
            style={{ marginTop: '15px', cursor: 'pointer' }}
            href={'https://etherscan.io/address/' + accountAddress}
            target="_blank"
          >
            View Wallet on Etherscan
          </a>
        </Row>
        <SendEtherModal gas={gas} gasPrice={gasPrice} isOpen={isModalOpen} handleClose={handleModalClose} />
      </div>
    </WalletWrapper>
  );
};

const WalletWrapper = styled(Card)`
  height: 92vh;
  width: 25%;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  width: 100%;
  float: left;
  margin-bottom: 15px;
`;

const Row = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  & > h3 {
    margin-right: 15px;
  }
  & > h2 {
    text-align: center;
  }
  & > h4 {
    text-align: center;
  }
  & > h4,
  & > h3,
  & > p {
    width: 100%;
    word-wrap: break-word;
    float: left;
    margin-bottom: 8px;
  }
  $ > p {
  }
`;

export default CurrentWalletRenderer;

// <Row>
//           <h3>Balance: </h3>
//           <BalanceSlider balance={balance} showEth={showEth} toggleBalance={toggleBalance} />
//           <BalanceSliderSecond balance={balance} showEth={showEth} toggleBalance={toggleBalance} />
//         </Row>

/* <Row>
          <SvgIcon icon="wrapped-candy" height={50} width={50} />
        </Row> */

//         // <p style={{ color: Colors.GRAY5, fontSize: '17px', textAlign: 'center' }}>[{balance} WETH]</p>

// const BalanceSlider = props => {
//   const { showEth, toggleBalance, balance } = props;
//   return (
//     <BalancesWrapper>
//       {showEth && <Button style={{ marginRight: '13px' }} onClick={toggleBalance} icon="chevron-left" minimal="true" />}
//       <h2>
//         <EthBalance showEth={showEth}>{balance} ETH</EthBalance>
//         <WethBalance showEth={showEth}>{balance} WETH</WethBalance>
//       </h2>
//       {!showEth && <Button onClick={toggleBalance} icon="chevron-right" minimal="true" />}
//     </BalancesWrapper>
//   );
// };
// const BalanceSliderSecond = props => {
//   const { showEth, toggleBalance, balance } = props;
//   return (
//     <BalancesWrapper>
//       {showEth && <Button style={{ marginRight: '13px' }} onClick={toggleBalance} icon="chevron-left" minimal="true" />}
//       <h2>
//         <EthBalance showEth={showEth}>{balance} ETH</EthBalance>
//         <WthBalanceMuted showEth={showEth}>[{balance} WETH]</WthBalanceMuted>
//       </h2>
//       {!showEth && <Button onClick={toggleBalance} icon="chevron-right" minimal="true" />}
//     </BalancesWrapper>
//   );
// };

// const EthBalance = styled.p.attrs({
//   className: props => (props.showEth ? 'hideLeft' : ''),
// })``;

// const WethBalance = styled.p.attrs({
//   className: props => (props.showEth ? '' : 'hideRight'),
// })`
//   margin-top: -30px;
// `;

// const WthBalanceMuted = styled.p.attrs({
//   className: props => (props.showEth ? '' : 'hideRight'),
// })`
//   color: ${Colors.GRAY5};
//   font-size: 17px !important;
//   font-weight: normal !important;
//   text-align: center;
//   margin-top: -30px;
// `;

// const BalancesWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   & h2 {
//     overflow: hidden;
//   }
//   & p {
//     transition: all linear 300ms;
//   }
// `;

// {privateKey && (
//   <Row>
//     <h3>Private Key: </h3>
//     <p>
//       {displayPvtKey ? privateKey : toPassowrdType(privateKey)}
//       <Button
//         minimal="true"
//         style={{ marginLeft: '10px', cursor: 'pointer' }}
//         onClick={togglePrivateKey}
//         icon={showPrivateKey ? 'eye-off' : 'eye-open'}
//       />
//     </p>
//   </Row>
// )}
