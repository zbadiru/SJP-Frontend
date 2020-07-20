import React, { Component } from 'react'
import API from '../API'


export default class SignIn extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signIn(this.state)
        .then(json => this.props.signIn(json.username, json.token))
        this.props.history.push("/home")
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type='text' name='username' onChange={this.handleChange} /><br/>

                <label>Password:</label>
                <input type='password' name='password' onChange={this.handleChange} /><br/>

                <input type='submit' value='Sign In' />
            </form>
        )
    }
}
