import React from "react";
import { connect } from 'react-redux';

import login from "../actions/auth";

class Login extends React.Component {
    state = {
        userName: "",
        password: "",
        errorMessage: ""
    };

    handleChange = e => {
        switch (e.target.id) {
            case "email":
                this.setState({
                    ...this.state,
                    userName: e.target.value,
                    errorMessage: ""
                });
                break;
            case "password":
                this.setState({
                    ...this.state,
                    password: e.target.value,
                    errorMessage: ""
                });
                break;
            default:
                return this.state;
        }
    };

    handleLogin = (e) => {
        const { userName, password } = this.state
        e.preventDefault();
        if (userName && password) {
            const rex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (rex.test(String(userName).toLowerCase())) {
                this.props.login(this.state);
            } else {
                this.setState({
                    ...this.state,
                    errorMessage: "Please enter valid email address"
                })
            }
        } else {
            this.setState({
                ...this.state,
                errorMessage: "Please enter your username and password"
            })
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            errorMessage: nextProps.error
        })
    }

    render() {
        const { userName, password, errorMessage } = this.state;
        const { auth, history } = this.props;

        if (auth) {
            history.push("/employeeDetails");
        }
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="header_message">Login Form</h1>
                    <p className="error-message">{errorMessage}</p>
                    <form onSubmit={this.handleLogin}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="mail">UserName</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    value={userName}
                                    id="email"
                                    placeholder="Please enter your Email..."
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    value={password}
                                    id="password"
                                    placeholder="Please enter your Password..."
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth.auth,
    error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
