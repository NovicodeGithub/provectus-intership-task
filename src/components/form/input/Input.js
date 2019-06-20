import React from 'react'

import './input.css'

const Input = props => {

    let formControl = "form-control"
    let validationError = null

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error'
        validationError = <p>Please enter a valid value!</p>
    }

    return (
        <div className="form-group">
            <input className={formControl} {...props} />
            {validationError}
        </div>
    )
}

export default Input;
