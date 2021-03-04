import "./item-details.scss"
import React from "react";

const ItemDetail = ({item, setDetail}) => {

    const {name, category, price} = item;

    const handleSubmit = (value) => {
        setDetail(value);
    };

    return (
        <div className="item">
            <figure>
                <p className="category">{category}</p>
                <h3 className="name">{name}</h3>
                <h2 className="price"><span>$</span>{price}</h2>
                <button type="submit" onClick={() => handleSubmit(item)}>BUY</button>
            </figure>
        </div>
    )
};

export default ItemDetail;