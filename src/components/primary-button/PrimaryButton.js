import React from 'react'

import './primary-button.css'
class PrimaryButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
    }

    render() {
        return (
            <button className={this.props.className} type={this.props.type}>
                {this.props.buttonText}
            </button>
        )
    }
}

export default PrimaryButton
