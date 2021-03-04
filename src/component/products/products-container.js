import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchProductsList} from "../../reducer/product-reducer";
import Spinner from "../spinner";
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator";

const ProductsContainer = ({products: {loading, error, data}, fetchProductsList}) => {

    useEffect(() => {
        fetchProductsList();
    }, []);

    if(loading) {
        return <Spinner />
    }

    if(error) {
        return <ErrorIndicator />
    }

    return (
        <ItemList data={data}/>
    )
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProductsList})(ProductsContainer)