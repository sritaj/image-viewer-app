import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if (this.props.location.state === undefined) {
      return <Redirect to="/" />;
    }
    if (this.props.location.state.loginSuccess === true) {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div>
            <span>Success</span>
          </div>
        </div>
      );
    }
  }
}

export default Home;
