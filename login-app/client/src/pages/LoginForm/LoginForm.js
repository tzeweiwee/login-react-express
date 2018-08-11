import React, { Component } from 'react';
import InputField from '../../components/InputField/InputField';

export default class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            error: false
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <div className='loginContainer'>
                <InputField onChange={this.handleUsername} type="text" value={username} labelText={`Username`} name={`username`} placeholder={`Username`} />
                <InputField onChange={this.handlePassword} type="password" value={password} labelText={`Password`} name="password" placeholder="Password" />
                {error && <label className='errorMessage'>{error}</label>}
            </div>
        );
    }
}