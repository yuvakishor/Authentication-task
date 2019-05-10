import employeeListData from "../data/employeeList"

const initialState = {
    employeeList : null
}

const employeeList = (state = initialState, action) => {
    switch (action.type) {
        case "GET_EMPLOYEE_LIST":
            return {
                employeeList : employeeListData
            }
        default:
            return state
    }

}

export default employeeList;