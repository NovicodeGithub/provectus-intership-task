import React from 'react'

import './primary-button.css'
class PrimaryButton extends React.Component {
    render() {
        return (
            <button className="primary-button" type="button">
                {this.props.children}
            </button>
        )
    }
}

export default PrimaryButton
