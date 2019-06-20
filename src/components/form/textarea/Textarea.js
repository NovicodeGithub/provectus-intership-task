import React from 'react'

import './textarea.css'

const Textarea = props => {
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
        </div>
    );
}

export default Textarea;
