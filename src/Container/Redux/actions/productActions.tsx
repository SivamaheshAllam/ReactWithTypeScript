import { ActionTypes } from "../constants/action-types"


export const setProducts=(product:any)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:product
    }
}

export const selectedProduct=(product:any)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}