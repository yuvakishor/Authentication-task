import React from "react";
import { connect } from 'react-redux';

import getListOfEmployees from "../actions/employeeList";


class EmployeeDetails extends React.Component {

    componentDidMount() {
        this.props.getListOfEmployees();
    }

    render() {
        const { employeeList } = this.props;
        return (
            <React.Fragment>
                <h2 className="header_message">Employee List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList ? employeeList.user.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phoneNo}</td>
                                </tr>
                            );
                        }) : null}
                    </tbody>
                </table>
            </React.Fragment>
        )

    }
}


const mapStateToProps = state => ({
    employeeList: state.employeeList.employeeList
})

const mapDispatchToProps = dispatch => ({
    getListOfEmployees: () => dispatch(getListOfEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
