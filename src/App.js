import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import routes from "./Routes2";
import "antd/dist/antd.css";
import "./App.css";
import * as actions from "./store/actions/auth";

import CustomLayout from "./containers/Layout";
import AuthLayout from "./containers/AuthLayout";
// import Login from "./containers/Login";
import Login from "./containers/Login2";
import AssignmentList from "./containers/AssignmentList";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      // <Login />
      <Router >
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
