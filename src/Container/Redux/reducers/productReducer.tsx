import { ActionTypes } from "../constants/action-types";

interface Product {
    id: any;
    title: any;
    category: any;
}

interface SetProductsAction {
    type: typeof ActionTypes.SET_PRODUCTS;
    payload: Product[]; // Adjust the type of payload as needed
}

type ProductAction = SetProductsAction /* | OtherActionType | ... */;

interface SelectedProductsAction {
    type: typeof ActionTypes.SELECTED_PRODUCT;
    payload: Product[]; // Adjust the type of payload as needed
}
type SelectedProductAction = SelectedProductsAction 



const initialState: { products: Product[] } = {
    products: []
};

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            // Assuming payload is an array of products, update the state
            return {
                ...state,
                products: action.payload
            };

        // Handle other action types...

        default:
            return state;
    }
};




export const selectedProductReducer = (state = {}, action: SelectedProductAction) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            // Assuming payload is an array of products, update the state
            return {
                ...state,
                products:  action.payload
            };

        // Handle other action types...

        default:
            return state;
    }
};
