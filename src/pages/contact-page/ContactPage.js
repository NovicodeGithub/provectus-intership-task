import React from 'react'
import API from '../../apis/herokuapp'

import { Label, Textarea, Input, Button } from '../../components/form'

import './contact-page.css'
import validate from '../../components/form/validate'

class ContactPage extends React.Component {
    constructor() {
        super()

        this.state = {
            formIsValid: false,
            formControls: {
                name: {
                    value: '',
                    placeholder: 'Your name',
                    type: 'text',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                },

                email: {
                    value: '',
                    placeholder: 'Your email',
                    type: 'email',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    },
                    touched: false
                },

                comment: {
                    value: '',
                    placeholder: 'Your question',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                }
            }
        }
    }
    changeHandler = event => {

        const name = event.target.name
        const value = event.target.value

        const updatedControls = {
            ...this.state.formControls
        }
        const updatedFormElement = {
            ...updatedControls[name]
        }
        updatedFormElement.value = value
        updatedFormElement.touched = true
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules)

        updatedControls[name] = updatedFormElement

        let formIsValid = true
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        })

    }


    formSubmitHandler = event => {
        event.preventDefault();
        const formData = {}

        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value
        }

        API.post('/contact', {
            name: formData.name,
            email: formData.email,
            comment: formData.comment
        })
        .then(function (response) {
            console.log(response)
            alert("Thank you for question!")
        })
        .catch(function (error) {
            console.log(error);
            alert("There was an error occurred!")
        })
    }

    render() {
        return (
            <div className="contact-page">
                <form className="contact-form" onSubmit={this.formSubmitHandler}>
                    <h1>Contact Us</h1>
                    <small>If you have any questions, just reach out to us and we’ll respond as soon as we can. </small>


                    <Label title="Your name" className="input-field">
                        <Input name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            type={this.state.formControls.name.type}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />
                    </Label>

                    <Label title="Your email address" className="required input-field">
                        <Input name="email"
                            placeholder={this.state.formControls.email.placeholder}
                            value={this.state.formControls.email.value}
                            type={this.state.formControls.email.type}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.email.touched}
                            valid={this.state.formControls.email.valid}
                        />
                    </Label>

                    <Label title="Subject" className="input-field">
                        <Textarea name="comment"
                            placeholder={this.state.formControls.comment.placeholder}
                            value={this.state.formControls.comment.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.comment.touched}
                            valid={this.state.formControls.comment.valid}
                        />
                    </Label>

                    {/* Reacts to change of font-size */}
                    <Button className="submit-button"
                        type="submit"
                        buttonText="Send your question"
                        disabled={! this.state.formIsValid}
                    />
                </form>
            </div>
        )
    }
}

export default ContactPage
