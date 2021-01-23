import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./components/Profile";
import About from "./components/About";
import Home from "./components/Home";
import Department from "./components/Department";
import Employee from "./components/Employee";
import FAQ from "./components/FAQ";
import Holidays from "./components/Holidays";
import Payroll from "./components/Payroll";
import Policy from "./components/Policy";
import Project from "./components/Project";
import Signout from "./components/Signout";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/create/" component={AssignmentCreate} /> */}
    <Route exact path="/Login/" component={Login} />
    <Route exact path="/Signup/" component={Signup} />
    {/* <Route exact path="/assignments/:id" component={AssignmentDetail} /> */}
    <Route exact path="/Profile" component={Profile} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Department" component={Department} />
    <Route exact path="/Employee" component={Employee} />
    <Route exact path="/FAQ" component={FAQ} />
    <Route exact path="/Holidays" component={Holidays} />
    <Route exact path="/Payroll" component={Payroll} />
    <Route exact path="/Policy" component={Policy} />
    <Route exact path="/Project" component={Project} />
    <Route exact path="/Signout" component={Signout} />

  </Hoc>
);

export default BaseRouter;
