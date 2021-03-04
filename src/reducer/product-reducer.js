import {getProductsList} from "../service";

const TOGGLE_LOADING = 'product/TOGGLE_LOADING';
const FETCH_PRODUCTS_FAILURE = 'product/FETCH_PRODUCTS_FAILURE';
const FETCH_PRODUCTS_LIST = 'product/FETCH_PRODUCTS_LIST';

const initialState = {
    loading: true,
    error: false,
    data: []
};

const toggleLoading = (loading) => {
    return {
        type: TOGGLE_LOADING,
        payload: loading
    }
};

const fetchError = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
};

const dataLoaded = (data) => {
    return {
        type: FETCH_PRODUCTS_LIST,
        payload: data
    }
};

export const fetchProductsList = () => async (dispatch) => {
    dispatch(toggleLoading(true));
    let data = await getProductsList();
    if(data.status === 200) {
        dispatch(dataLoaded(data.data));
        setTimeout(() => {
            dispatch(toggleLoading(false))
        }, 1000);
    } else {
        dispatch(fetchError(true));
    }
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_PRODUCTS_FAILURE:
            return {...state,error: action.payload};
        case FETCH_PRODUCTS_LIST:
            return {...state, data: action.payload}
        default:
            return state;
    }
};

export default productsReducer;