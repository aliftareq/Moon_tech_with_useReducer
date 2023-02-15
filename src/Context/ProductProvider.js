import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../states/actionType';
import { initalState, productReducer } from '../states/ProductReducer';

export const PRODUCT_CONTEXT = createContext()



const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initalState)

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch('products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
            .catch((err) => dispatch({ type: actionTypes.FETCHING_ERROR, payload: err }))
    }, [])

    const value = { state, dispatch }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProduct = () => {
    return useContext(PRODUCT_CONTEXT)
}

export default ProductProvider;