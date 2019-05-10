
const login = (data) => dispatch => {
    dispatch({
        type: 'LOGIN',
        payload: data
    })
}

export default login;