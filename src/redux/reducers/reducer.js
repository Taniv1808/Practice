import types from "../types";

const initial_state = {
    userData: {}
}

export default function reducer (state = initial_state, action) {
    let {userData}=state
    console.log(userData+'idnknv')
    switch (action.type) {
        case types.LOGIN: {
            return { 
                ...state,
                userData: action.payload
             };
        }
        case types.LOGOUT:{
            return{
                ...state,
                userData:action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}