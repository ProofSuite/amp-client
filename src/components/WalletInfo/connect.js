import { connect } from 'react-redux'
import walletInfoSelector, { detectContract, addToken, registerToken } from '../../store/models/walletInfo'


const mapStateToProps = (state: State) => {
    let selector = walletInfoSelector(state)

    return {
        ...selector
    }
}

const mapDispatchToProps = {
    detectContract,
    addToken,
    registerToken,
}

export default connect(mapStateToProps, mapDispatchToProps)