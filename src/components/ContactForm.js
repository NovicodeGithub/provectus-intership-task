import React from 'react'
import { Input, Textarea, Label, Button } from './form'

class ContactForm extends React.Component {
    state = {
        term: 'Default text'
    }

    render() {
        return (
            <form action="" className="contact-form">
                <h2>Form</h2>

                <Label title="aaaaaaaaaa" className="required input-field">
                    <Input name="name" placeholder="Даниил" required />
                </Label>

                <Label title="cccccccc" className="required input-field">
                    <Input name="email" placeholder="example@gmail.com" required />
                </Label>

                <Label title="bbbbbbbb" className="required input-field">
                    <Textarea name="comment" placeholder="Хотелось бы узнать цену хот дога" required />
                </Label>

                {/* Reacts to change of font-size */}
                <Button className="submit-button" type="submit" buttonText='More Dogs‘n Make Em Hot'></Button>
            </form>
        )
    }
}

export default ContactForm
