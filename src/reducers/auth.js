import userDetails from "../data/login.json"

const initialState = {
    userName: userDetails.username,
    password: userDetails.password,
    auth: false,
    error: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            if ((state.userName === action.payload.userName) && (state.password === action.payload.password)) {
                return {
                    ...state,
                    auth: true
                }
            } else {
                return {
                    ...state,
                    auth: false,
                    error: "Please enter valid Username and Password"
                }
            }
        default:
            return state
    }

}

export default authReducer;