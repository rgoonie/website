import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",
            formErrors: {
                name: "",
                email: "",
                message: "",
            }
        }
    }

    handleNameChange = e => {
        const {value} = e.target;

        const errors = this.state.formErrors;
        if(value.length === 0)
            errors.name = "Please enter your name";
        else
            errors.name = "";

        this.setState({name:value, formErrors:errors})
    }
    
    validEmail = email => {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    }

    handleEmailChange = e => {
        const {value} = e.target;

        //email regex from https://emailregex.com/
        const errors = this.state.formErrors;
        if( !this.validEmail(value) )
            errors.email = "Please enter a valid email";
        else
            errors.email = "";

        this.setState({email:value, formErrors:errors})
    }
    
    handleMessageChange = e => {
        const {value} = e.target;

        const errors = this.state.formErrors;
        if(value.length === 0)
            errors.message = "Enter a message";
        else
            errors.message = "";

        this.setState({message:value, formErrors:errors});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message } = this.state;
        const errors = this.state.formErrors

        if(name.length === 0) errors.name = "Please enter your name";
        if( !this.validEmail(email) ) errors.email = "Please enter a valid email";
        if(message.length === 0) errors.message = "Enter a message";

        if(errors.name === "" && errors.email === "" && errors.message === ""){
            console.log("submitted Message");

        }
        else{
            this.setState({formErrors: errors});
        }

    }

    render() {
        return (
            <div className="contact-page">
                <div className="contact-content">
                    <h1 className="contact-header">Contact Me</h1>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <h2 className="contact-form-header">Send a Message</h2>

                            <div className="contact-form-fields-container">
                                <label htmlFor="name" >Name:{" "}</label>
                                <input type="text" name="name" placeholder="Enter Name" onChange={this.handleNameChange}/>
                                <p className="contact-error-message">{this.state.formErrors.name}</p>
                                
                                <label htmlFor="email">Email:{" "}</label>
                                <input type="text" name="email" placeholder="Enter Email" onChange={this.handleEmailChange}/>
                                <p className="contact-error-message">{this.state.formErrors.email}</p>

                                <label htmlFor="message">Message:{" "}</label>
                                <textarea name="message" rows="4" onChange={this.handleMessageChange}/>
                                <p className="contact-error-message">{this.state.formErrors.message}</p>
                            </div>

                            <div className="contact-form-submit-container">
                                <input className="contact-form-submit" type="submit"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;
