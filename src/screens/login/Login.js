import React, { Component } from "react";
import "./Login.css";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import FormHelperText from "@material-ui/core/FormHelperText";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "../../common/header/Header";

const inputStyle = {
  fullWidth: true,
};

const validUser = {
  username: "sritaj",
  password: "sritaj",
  accesstoken:
    "IGQVJXZAnhlUzRZAVWM1dzVQVzlRZAjIzSmhHNDVEYmgzcnFUM0NXQ2dTOEdHV0RfVWttdHNWbEVCRzNMZAWs0ZAi1ZAeWJyUVhaRDBLMl9YOXVTdDZA6UnJQMWRBa3JBNnNzaGdQVlBWRHVpQTR3bWRzWUltLQZDZD",
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      username: "",
      password: "",
      loginInfo: "dispNone",
    };
  }

  loginClickHandler = () => {
    if (this.state.username === "" || this.state.password === "") {
      this.state.username === ""
        ? this.setState({ usernameRequired: "dispBlock" })
        : this.setState({ usernameRequired: "dispNone" });
      this.state.password === ""
        ? this.setState({ passwordRequired: "dispBlock" })
        : this.setState({ passwordRequired: "dispNone" });
      this.setState({ loginInfo: "dispNone" });
      return;
    } else if (
      this.state.username === validUser.username &&
      this.state.password === validUser.password
    ) {
      this.setState({
        loginInfo: "dispNone",
      });
    } else {
      this.setState({
        loginInfo: "dispBlock",
        usernameRequired: "dispNone",
        passwordRequired: "dispNone",
      });
    }
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Card className="loginPageCardStyle">
          <div className="loginPageStyle">
            <heading className="headingStyle">LOGIN</heading>
            <br></br>
            <div className="loginPageInputs">
              <FormControl required className="styleFormControl">
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  style={inputStyle}
                  className="loginPageInputStyles"
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br></br>
              <FormControl required className="styleFormControl">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  style={inputStyle}
                  className="loginPageInputStyles"
                  id="password"
                  type="password"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
                <FormHelperText className={this.state.loginInfo}>
                  <span className="red">
                    Incorret username and /or password
                  </span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
