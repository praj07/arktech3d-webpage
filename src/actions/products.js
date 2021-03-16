import * as api from '../api';


// Action Creators 

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getProducts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (e) {
        console.log('Unable to fetch all products', e.message)
    }
};

export const getProduct = (productId) => async (dispatch) => {
    try {
        const { data } = await api.getProduct(productId); 
        dispatch({ type: 'FETCH_ONE', payload: data });
    } catch (e) {
        console.log('Unable to fetch all products', e.message)
    }
}