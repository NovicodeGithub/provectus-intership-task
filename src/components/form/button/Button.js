import React from 'react'

import './button.css'
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            buttonText: 'Default text',
            type: '',
            disabled: false
        }
    }

    render() {
        return (
            <button className={this.props.className} type={this.props.type} disabled={this.props.disabled}>
                {this.props.buttonText}
            </button>
        )
    }
}

export default Button
