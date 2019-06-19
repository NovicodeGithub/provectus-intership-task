import React from 'react'
import API from '../../apis/herokuapp'
import { Input, Textarea, Label, Button } from '../../components/form'

import './contact-page.css'

class ContactPage extends React.Component {
    render() {
        return (
            <div className="contact-page">
                <form className="contact-form" onSubmit={this.handleFormSubmit}>
                    <h1>Contact Us</h1>
                    <small>If you have any questions, just reach out to us and we’ll respond as soon as we can. </small>

                    <Label title="Your name" className="input-field">
                        <Input type="text" name="name" placeholder="Daniil Novikov" />
                    </Label>

                    <Label title="Your email address" className="required input-field">
                        <Input type="email" name="email" placeholder="example@gmail.com" required />
                    </Label>

                    <Label title="Subject" className="input-field">
                        <Textarea name="comment" placeholder="I want to order American Hot Dog" />
                    </Label>

                    {/* Reacts to change of font-size */}
                    <Button className="submit-button" type="submit" buttonText="Send your order" />
                </form>
            </div>
        )
    }
}

export default ContactPage
