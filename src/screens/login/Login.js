import React, { Component } from "react";
import "./Login.css";
import { Container, Grid, Paper } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const inputStyle = {
  fullWidth: true,
};

class Login extends Component {
  render() {
    return (
      /*
      <Grid>
        <Paper elevation={10} style={paperSytle}>
          <heading className="headingStyle">LOGIN</heading>{" "}
          <div className="loginPageStyle">
            <FormControl required>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" />
            </FormControl>
            <br></br>
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary">
              LOGIN
            </Button>
          </div>
        </Paper>
      </Grid>
      */
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
              />
            </FormControl>
            <br></br>
            <FormControl required className="styleFormControl">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                style={inputStyle}
                className="loginPageInputStyles"
                id="password"
                type="password"
              />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary">
              LOGIN
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default Login;
