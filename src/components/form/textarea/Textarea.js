import React from 'react'
import './textarea.css'

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            required: false,
            className: '',
            placeholder: ''
        }
    }

    render() {
        return (
            <textarea
                className={this.props.className}
                name={this.props.name}
                value={this.props.value}
                required={this.props.required}
                placeholder={this.props.placeholder}
            >
            </textarea>
        )
    }
}

export default Textarea
