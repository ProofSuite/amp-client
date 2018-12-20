import React from 'react'
import ColoredCryptoIcon from './ColoredCryptoIcon'
import styled from 'styled-components'

const CryptoIconPair = ({ baseToken, quoteToken, size }) => {
    size = size || 28

    return (
        <Container size={size}>
            <QuoteIconContainer size={size}>
                <ColoredCryptoIcon name={quoteToken} size={size} />
            </QuoteIconContainer>
            <BaseIconContainer size={size}>
                <ColoredCryptoIcon name={baseToken} size={size} />
            </BaseIconContainer>            
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: ${props => 2 * props.size + "px"};
`

const BaseIconContainer = styled.div`
    position: absolute;
    top: ${props => -props.size / 2 + "px"};
`

const QuoteIconContainer = styled.div`
    position: absolute;
    left: 25px;
    top: ${props => -props.size / 2 + "px"};
`   

export default CryptoIconPair