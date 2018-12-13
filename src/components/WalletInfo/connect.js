import { connect } from 'react-redux'
import walletInfoSelector, { detectContract } from '../../store/models/walletInfo'


const mapStateToProps = (state: State) => {
    let selector = walletInfoSelector(state)

    return {
        ...selector
    }
}

const mapDispatchToProps = {
    detectContract
}

export default connect(mapStateToProps, mapDispatchToProps)