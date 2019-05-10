import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from './containers/Login';
import EmployeeDetails from "./containers/EmployeeListpage"

import './App.css';


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? (
          <Component {...props} />
        )
        : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    )}
  />
);


function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/employeeDetails" component={EmployeeDetails} isAuthenticated={props.auth} />
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.auth
})

export default connect(mapStateToProps, null)(App);
