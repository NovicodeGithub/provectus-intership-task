import React from 'react'
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            type: 'text',
            required: false,
            className: '',
            placeholder: ''
        }
    }

    render() {
        return (
            <input
                className={this.props.className}
                name={this.props.name}
                value={this.props.value === undefined ? '' : this.props.value}
                type={this.props.type}
                required={this.props.required}
                placeholder={this.props.placeholder}
            >
            </input>
        )
    }
}
export default Input
