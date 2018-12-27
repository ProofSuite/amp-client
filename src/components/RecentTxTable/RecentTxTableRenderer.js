
// @flow
import React from 'react';
import styled from 'styled-components';
import { relativeDate } from '../../utils/helpers'

import { 
  Loading, 
  Colors, 
  CenteredMessage,
  SmallText,
  FlexRow,
  Box
} from '../Common';

import { 
  Spinner,
} from '@blueprintjs/core';

import type { Trade } from '../../types/trades';
import type { TokenPair } from '../../types/tokens';
import type { Tx } from '../../types/transactions'

type Props = {
  selectedTabId: string,
  currentPair: TokenPair,
  onChange: string => void,
  trades: Array<Trade>,
  userTrades: Array<Trade>,
  toggleCollapse: (SyntheticEvent<>) => void,
  openEtherscanLink: string => void,
  isOpen: boolean,
  transactions: Array<Tx>
};


const RecentTxTableRenderer = (props: Props) => {
  const { 
    transactions,
    openEtherscanLink
  } = props;


  if (!transactions) return <Loading />
  if (transactions.length === 0) return <CenteredMessage message="No transactions for this token pair" />

  return (
    <React.Fragment>
      <ListHeader className="heading">
      </ListHeader>
      <ListBody className="list">
        {
          transactions.map((tx, index) => (
          <Row 
            key={index}
            onClick={() => openEtherscanLink(tx.hash)}
            // color={tx.status === 'ERROR' ? Colors.RED_MUTED : Colors.GREEN_MUTED}
          >
            {
              {
              "PENDING": (
                <React.Fragment>
                  <Cell>
                    <SmallText muted>{tx.type}</SmallText>
                  </Cell>
                  <Cell>
                    <FlexRow alignItems="center">
                      <SmallText color={Colors.SUCCESS}>PENDING</SmallText>
                      <Box px={2}>
                        <Spinner size={15} intent="success" />
                      </Box>
                    </FlexRow>
                  </Cell>
                  <Cell>
                    <SmallText muted>{relativeDate(tx.time)}</SmallText>
                  </Cell>
                </React.Fragment>
              ),
              'CONFIRMED': (
                <React.Fragment>
                  <Cell>
                    <SmallText muted>{tx.type}</SmallText>
                  </Cell>
                  <Cell>
                    <SmallText color={Colors.SUCCESS}>
                      CONFIRMED
                    </SmallText>
                  </Cell>
                  <Cell>
                    <SmallText muted>{relativeDate(tx.time)}</SmallText>
                  </Cell>
                </React.Fragment>
              ),
              'ERROR': (
                <React.Fragment>
                  <Cell>
                    <SmallText muted>{tx.type}</SmallText>
                  </Cell>
                  <Cell>
                    <SmallText color={Colors.DANGER}>
                      ERROR
                    </SmallText>
                  </Cell>
                  <Cell>
                    <SmallText muted>{relativeDate(tx.time)}</SmallText>
                  </Cell>
                </React.Fragment>
              )
            }[tx.status]
          }
        </Row>
        ))
        }
      </ListBody>
    </React.Fragment>
  );
};

const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const ListBody = styled.ul`
  height: 90%;
  max-height: 500px;
  overflow-y: scroll;
  margin: 0;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const HeadingRow = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-left: 10px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const Row = styled.li.attrs({
  className: 'row',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  border: 1px transparent;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0 rgba(16, 22, 26, 0.15);
  padding: 7px;
  margin-left: 0px !important;
  padding-left: 10px !important;
  background-color: ${props => props.color};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.BLUE_MUTED};
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 10px 4px rgba(16, 22, 26, 0.1),
      1px 18px 24px rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgb(49, 64, 76), -1px 5px 4px rgba(16, 22, 26, 0.1), 1px 7px 24px rgba(16, 22, 26, 0.2);
    z-index: 1;
  }

`;

const Cell = styled.span`
  color: ${props => props.color ? props.color : Colors.TEXT_MUTED};
  flex: 1;
  min-width: 35px;
`;

const HeaderCell = styled.span`
  min-width: 35px;
  flex: 1;
`;

export default RecentTxTableRenderer;
