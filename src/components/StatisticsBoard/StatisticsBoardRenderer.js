import React from 'react'
import styled from 'styled-components'
import { formatNumber } from 'accounting-js'

import { FlexRowWrap, FlexColumn, FlexRow, LargeText, Header, Box, Colors } from '../Common'
import { Position } from '@blueprintjs/core'
import ColoredCryptoIcon from '../Common/ColoredCryptoIcon'
import CryptoIconPair from '../Common/CryptoIconPair'
import Help from '../../components/Help'

import TubeChart from '../TubeChart'
import PieChart from '../PieChart'

type Props = {
    tradeCountsByToken: Array<Object>,
    orderCountsByToken: Array<Object>,
    tradeCountsByPair: Array<Object>,
    orderCountsByPair: Array<Object>,
    tradeValuesByToken: Array<Object>,
    orderValuesByToken: Array<Object>,
    tradeValuesByPair: Array<Object>,
    orderValuesByPair: Array<Object>,
    mostTradedToken: string,
    mostTradedPair: string,
    transactionSuccessPercentage: number,
    totalBuyBalue: number,
    totalSellValue: number,
    numberOfTrades: number,
    numberOfOrders: number,
    numberOfBuys: number,
    numberOfSells: number
}

const colorsTable = [
    ["#FFE39F", "#EEDE9F", "#DEDA9F", "#CDD59E", "#BECF9C", "#AECA99", "#9FC596", "#91BF91", "#83B98C", "#76B387", "#69AD80", "#5DA779", "#51A171", "#479A69", "#3D945F", "#358E55", "#2D874B", "#27803F", "#217A32", "#1D7324"],
    ["#FFC940", "#FBC13D", "#F6B83B", "#F2B038", "#EDA835", "#E89F33", "#E39730", "#DE8F2D", "#D9872B", "#D47F28", "#CF7725", "#CA6F23", "#C56720", "#BF5F1D", "#BA561B", "#B44E18", "#AF4616", "#A93D13", "#A43410", "#9E2B0E"],
    ["#FFEEC5", "#FEE0BE", "#FBD3B7", "#F8C5B0", "#F5B8A9", "#F0ABA2", "#EB9E9C", "#E59196", "#DE8590", "#D7798A", "#CF6D84", "#C6627F", "#BC5779", "#B24C74", "#A6436F", "#9A3A6B", "#8D3367", "#7E2D63", "#6E285F", "#5C255C"],
    ["#E1BAE1", "#E2AFD6", "#E2A4CB", "#E199C0", "#DF8EB7", "#DC84AD", "#D879A4", "#D3709C", "#CD6694", "#C75D8C", "#BF5585", "#B74C7F", "#AE4579", "#A53E73", "#9B386E", "#903269", "#842E65", "#782A62", "#6B275F", "#5C255C"],
    ["#FFE39F", "#EBDDA0", "#D9D7A1", "#C7D1A1", "#B6CAA2", "#A7C3A2", "#98BBA2", "#8AB3A2", "#7DABA2", "#71A3A2", "#669BA1", "#5B92A1", "#528AA0", "#48819F", "#40789F", "#38709E", "#31679D", "#2B5E9C", "#25549A", "#1F4B99"],
    ["#CFF3D2", "#BFEBCD", "#B0E4C8", "#A2DCC3", "#94D3BF", "#88CBBB", "#7CC2B7", "#71BAB4", "#67B1B1", "#5DA8AE", "#559FAB", "#4D96A8", "#468DA6", "#3F83A4", "#397AA1", "#3471A0", "#2F689E", "#2A5E9C", "#24559A", "#1F4B99"],
    ["#D1E1FF", "#CBD7FD", "#C5CEFA", "#BFC4F7", "#B9BBF4", "#B2B1F1", "#ABA8ED", "#A49FEA", "#9C97E6", "#958EE1", "#8D86DD", "#847ED8", "#7B76D3", "#726ECD", "#6867C7", "#5D60C0", "#515AB8", "#4454B0", "#344FA5", "#1F4B99"],
    ["#D1E1FF", "#CAD6FC", "#C4CBF9", "#BDC0F5", "#B7B5F0", "#B0AAEC", "#A9A0E6", "#A395E0", "#9C8BDA", "#9581D3", "#8F77CB", "#896DC3", "#8363B9", "#7D59AF", "#7750A5", "#724799", "#6C3E8C", "#67357D", "#622D6D", "#5C255C"],
    ["#E8F8B6", "#D9F1B4", "#CBEBB2", "#BCE4AF", "#AEDDAB", "#A1D7A7", "#93D0A2", "#86C99C", "#7AC296", "#6EBB8F", "#62B488", "#57AD80", "#4DA677", "#449E6E", "#3B9764", "#339059", "#2D894D", "#278141", "#227A33", "#1D7324"],
    ["#FFE39F", "#FCD993", "#F9CF88", "#F5C57D", "#F1BC73", "#EDB269", "#E9A860", "#E49F57", "#DF954E", "#DA8C46", "#D5823E", "#CF7937", "#CA7030", "#C4662A", "#BE5D24", "#B8541E", "#B14A19", "#AB4015", "#A53611", "#9E2B0E"]
]

const StatisticsBoardRenderer = (props: Props) => {

    const {
        tradeCountsByToken,
        orderCountsByToken,
        tradeCountsByPair,
        orderCountsByPair,
        tradeValuesByToken,
        orderValuesByToken,
        tradeValuesByPair,
        orderValuesByPair,
        mostTradedToken,
        mostTradedPair,
        biggestWinners,
        biggestLosers,
        transactionSuccessPercentage,
        totalBuyValue,
        totalSellValue,
        numberOfTrades,
        numberOfOrders,
        numberOfSells,
        numberOfBuys,
        total24HVolume,
        totalOrderVolume,
        currency
    } = props

    return (
        <React.Fragment>
            <FlexRow>
                <FlexColumn width="40%">
                    <FlexRow justifyContent="space-around">
                        <FlexColumn mt={2} alignItems="center">
                            <InfoHeader muted large>Most Traded Token </InfoHeader>
                            <Box p={2}>
                                <ColoredCryptoIcon name={mostTradedToken} size={96} />
                            </Box>
                        </FlexColumn>
                        <FlexColumn mt={2} alignItems="center">
                            <InfoHeader muted large>Most Traded Pair </InfoHeader>
                            <Box p={2}>
                                <CryptoIconPair baseToken={"WETH"} quoteToken={"USDC"} size={96} />
                            </Box>
                        </FlexColumn>
                    </FlexRow>
                    <FlexRow mt={4} justifyContent="space-around" >
                        <FlexColumn>
                            <FlexColumn alignItems="center">
                                <InfoHeader muted large>Total 24H Volume </InfoHeader>
                                <InfoNumber large pl={2}>{formatNumber(total24HVolume) } {currency} </InfoNumber>
                            </FlexColumn>
                            <FlexColumn alignItems="center">
                                <InfoHeader muted large>Total Orderbook Volume
                                <Help ml={1} position={Position.RIGHT}>Total value of all orders in AMP orderbooks. This number does not include non-listed tokens</Help>
                                </InfoHeader>
                                <InfoNumber large pl={2}>{formatNumber(totalOrderVolume) } {currency} </InfoNumber>
                            </FlexColumn>
                        </FlexColumn>
                        <FlexColumn>                    
                            <FlexColumn alignItems="center">
                                <InfoHeader muted large>Total Trades (24H) 
                                    <Help ml={1} position={Position.RIGHT}>This number does not include non-listed tokens</Help>
                                </InfoHeader>
                                <InfoNumber large pl={2}>{numberOfTrades}</InfoNumber>
                            </FlexColumn>
                            <FlexColumn alignItems="center">
                                <InfoHeader muted large>Total Orders Number
                                    <Help ml={1} position={Position.RIGHT}>This number does not include non-listed tokens</Help>
                                </InfoHeader>
                                <InfoNumber large pl={2}>{numberOfOrders } </InfoNumber>
                            </FlexColumn>
                        </FlexColumn>
                    </FlexRow>
                    <FlexColumn mt={4} p={2} alignItems="center">
                        <InfoHeader large>Transaction Success Percentage</InfoHeader>
                        <TubeChart 
                            loading={false}
                            positiveAmount={transactionSuccessPercentage}
                            negativeAmount={1 - transactionSuccessPercentage}
                            unit="%"
                        />
                    </FlexColumn>          
                    <FlexColumn p={2} alignItems="center">
                        <InfoHeader large>Buy/Sell Pressure</InfoHeader>
                        <TubeChart 
                            loading={false}
                            positiveAmount={totalBuyValue}
                            negativeAmount={totalSellValue}
                            unit="%"
                        />
                    </FlexColumn>
                </FlexColumn>
                <FlexRowWrap width="60%">
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={tradeCountsByToken} colors={colorsTable[1]}/>
                        <ChartTitle>Number of Trades / Token</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={orderCountsByToken}colors={colorsTable[2]} />
                        <ChartTitle>Number of Orders / Token</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={tradeCountsByPair}colors={colorsTable[3]} />
                        <ChartTitle>Number of Trades / Pair</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={orderCountsByPair} colors={colorsTable[4]} />
                        <ChartTitle>Number of Orders / Pair</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={tradeValuesByToken} colors={colorsTable[5]} />
                        <ChartTitle>Trade Volume / Token</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={orderValuesByToken} colors={colorsTable[6]} />
                        <ChartTitle>Order Volume / Token</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={tradeValuesByPair} colors={colorsTable[7]} />
                        <ChartTitle>Trade Volume / Pair</ChartTitle>
                    </FlexColumn>
                    <FlexColumn alignItems="center" mb={5}>
                        <PieChart data={orderValuesByPair} colors={colorsTable[8]} />
                        <ChartTitle>Order Volume / Pair</ChartTitle>
                    </FlexColumn>
                </FlexRowWrap>
            </FlexRow>
        </React.Fragment>
    )
}

export const ChartTitle = styled(LargeText)``

export const InfoHeader = styled.p`
    color: ${props => props.muted && Colors.TEXT_MUTED};
    font-size: 16px;
`

export const InfoNumber = styled.p`
    font-size: 32px;
`


export default StatisticsBoardRenderer