import React from 'react'

const Hideable = ({ children, hiddenIf }) => {
    if (hiddenIf) return null;

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Hideable