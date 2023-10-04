import { GET_SUCCESS, POST_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"
const initialState= {
    Loading:false,
    Products:[],
    isError:false
}

export const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case PRODUCT_REQUEST:
    return { ...state, isLoading:true,isError:false }
  
   case GET_SUCCESS:
        return {...state, isLoading:false, isError:false, Products:payload}

    case POST_SUCCESS:{
        return {...state, isLoading:false, isError:false,}
    } 

    case PRODUCT_FAILURE:{
        return  {...state, isLoading:false, isError:true}
    }
  default:
    return state
  }
}
