

const getListOfEmployees = () => dispatch => {
    dispatch({
        type: 'GET_EMPLOYEE_LIST'
    })

}

export default getListOfEmployees;