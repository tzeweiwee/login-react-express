import React, { Component } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import styles from "./LoginForm.css";
import api from "../../api/api";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      errors: [],
      success: false
    };
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  validate(email, password) {
    const errors = [];
    if (email.length === 0) {
      errors.push("Email is required");
    } else {
      if (
        email.split("").filter(x => x === "@").length !== 1 ||
        email.indexOf(".") === -1
      ) {
        errors.push("Invalid Email");
      }
    }

    if (password.length === 0) {
      errors.push("Password is required");
    }

    return errors;
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const errors = this.validate(email, password);
    this.setState({
      errors,
      success: false
    });
    if (!errors.length) {
      try {
        let result = await api.postLogin({ email, password });
        this.setState({
          success: result.body
        });
      } catch (err) {
        this.setState({
          errors: [err.message]
        });
      }
    }
  };

  render() {
    const { email, password, errors, success } = this.state;
    let errorMessages;
    if (errors.length) {
      errorMessages = errors.map(err => <p key={err}>{err}</p>);
    }
    return (
      <div className={styles.loginContainer}>
        <form>
          <InputField
            onChange={this.handleEmail}
            type="email"
            value={email}
            labelText="Email"
            name="email"
            placeholder="Email"
          />
          <InputField
            onChange={this.handlePassword}
            type="password"
            value={password}
            labelText="Password"
            name="password"
            placeholder="Password"
          />
          {errorMessages && (
            <label className={styles.errorMessage}>{errorMessages}</label>
          )}
          {success && (
            <label className={styles.successMessage}>{success}</label>
          )}
          <Button onClick={this.handleSubmit} type="submit" text="Sign In" />
        </form>
      </div>
    );
  }
}
