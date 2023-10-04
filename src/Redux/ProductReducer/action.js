import { GET_SUCCESS, POST_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"
import axios from "axios"
export const productRequest = ()=>{
     return{type:PRODUCT_REQUEST}
}

export const productFailure = ()=>{
     return{type:PRODUCT_FAILURE}
}

export const postSuccess= ()=>{
    return {type:POST_SUCCESS}
}
export const getSuccess = (payload)=>{
    return {type:GET_SUCCESS, payload}
}

export const addproduct =(payload)=> (dispatch)=>{
     dispatch(productRequest());
     axios.post(" http://localhost:3002/Products",)
     .then(()=>{
        postSuccess()
     })
     .catch(()=>{
         productFailure()
     })
}

export const getproduct=(obj)=> (dispatch)=>{
    dispatch(productRequest())

    axios.get("http://localhost:3002/Products", obj)
    .then((res)=>{
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(productFailure())
    })
}