import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const loginRequest = ()=>{
    return {type:LOGIN_REQUEST}
}
export const loginSuccess= (payload)=>{
    return {type:LOGIN_SUCCESS, payload}
}
export const loginFailure= ()=>{
    return {type:LOGIN_FAILURE}
}
export const login = (userdata) =>(dispatch)=>{
     dispatch(loginRequest())
     axios.post("https://reqres.in/api/login", userdata)
     .then((res)=>{
        dispatch(loginSuccess(res.data.token))
        console.log(res)
     })
     .catch((err)=>{
        dispatch(loginFailure())
     })
}