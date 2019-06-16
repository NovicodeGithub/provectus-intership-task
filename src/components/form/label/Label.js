import React from 'react'
import './label.css'

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            className: ''
        }
    }

    render() {
        return (
            <label className={this.props.className}>
                <span className="label-text">{this.props.title}</span>
                {this.props.children}
            </label>
        )
    }
}

export default Label
