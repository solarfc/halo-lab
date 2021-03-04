import {combineReducers} from "redux";
import productsReducer from "./product-reducer";

const reducer = combineReducers({
    products: productsReducer
});

export default reducer;