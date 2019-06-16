import React from 'react'
import './button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            buttonText: 'Default text',
            type: ''
        }
    }

    render() {
        return (
            <button className={this.props.className} type={this.props.type}>
                {this.props.buttonText}
            </button>
        )
    }
}
export default Button
