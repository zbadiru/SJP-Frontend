import React, { Component } from 'react'
import Field from './Field'
import Button from './Button'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "", 
            email: "", 
            message: "",
        }
        this.updateField = this.updateField.bind(this)
    }

    updateField(field, value) {
        this.setState({ [field]: value })
    }


    render() {
        return (
            <div>
                {/* Name field */}
                <Field
                label="Name"
                onChange={(event) => this.updateField('name', event.target.value)} 
                value={this.state.name} 
                />
                {/* Email field */}
                <Field 
                label="Email"
                onChange={(event) => this.updateField('email', event.target.value)} 
                value={this.state.email} 
                />
                {/* Message textarea */}
                <Field 
                label="Message"
                onChange={(event) => this.updateField('message', event.target.value)} 
                textarea={true} 
                value={this.state.message} 
                />
                {/* Submit button */}
                <Button 
                email='zbadiru@live.co.uk' 
                formValues={this.state} 
                />
            </div>
        )
    }
}

export default Contact