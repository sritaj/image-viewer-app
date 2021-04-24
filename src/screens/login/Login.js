import React, { Component } from "react";
import "./Login.css";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import FormHelperText from "@material-ui/core/FormHelperText";

const inputStyle = {
  fullWidth: true,
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      username: "",
      password: "",
    };
  }

  loginClickHandler = () => {
    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });

    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
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
    );
  }
}

export default Login;
