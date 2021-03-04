import "./item-list.scss";
import React, {useState} from "react";
import ItemDetail from "../item-details";
import {v4 as uuidv4} from "uuid";
import Form from "../form";

const ItemList = ({data}) => {

    const [detail, setDetail] = useState([]);
    const [visible, setVisible] = useState(false);

    const openModal = (value) => {
        setVisible(true);
        setDetail(value);
        document.querySelector('html').style.overflowY = 'hidden';
    };

    const closeModal = () => {
        setVisible(false);
        setDetail([]);
        document.querySelector('html').style.overflowY = 'scroll';
    };

    const addMinimumValue = () => {
        let min = Math.min(...data.map(item => item.price));
        let result = data.filter(item => item.price === min);
        setDetail(result[0]);
        setVisible(true);
    };

    const content = data.map(item => <ItemDetail key={uuidv4()} item={item} setDetail={openModal}/>);

    return (
        <div className="content">
            <div className="container">
                <div className="content__block">
                    <div className="content__block-products">
                        {content}
                    </div>
                    <button type="submit" onClick={() => addMinimumValue()}>
                        Buy cheapest
                    </button>
                </div>
                {visible && <Form detail={detail} closeModal={closeModal}/>}
            </div>
        </div>
    )
};

export default ItemList;