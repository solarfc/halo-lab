import "./form.scss";
import React, {useState} from "react";
import error from "../../assets/img/error.png";

const Form = ({detail, closeModal}) => {

    const {category, name, price} = detail;
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [userFieldError, setUserFieldError] = useState('');
    const [phoneFieldError, setPhoneFieldError] = useState('');
    const [userFieldValid, setUserFieldValid] = useState(false);
    const [phoneFieldValid, setPhoneFieldValid] = useState(false);

    const handleChange = (e, method, errorMethod) => {
        method(e.target.value);
        errorMethod('');
    };

    const onCloseModal = () => {
        closeModal();
        setUser('');
        setPhone('');
        setUserFieldError('');
        setPhoneFieldError('');
        setUserFieldValid(false);
        setPhoneFieldValid(false);
    }

    const validateFields = (fieldName, value) => {
        switch(fieldName) {
            case 'name':
                if(value.length === 0) {
                    setUserFieldError('This field in required');
                } else if(!value.match(/^[A-Za-zА-Яа-яЁё]+$/)) {
                    setUserFieldError('Only letters allowed');
                } else {
                    setUserFieldError('');
                    setUserFieldValid(true);
                }
                break;
            case 'phone':
                if(value.length === 0) {
                    setPhoneFieldError('This field in required');
                } else if(value.match(/[A-Za-zА-Яа-яЁё ]$/)) {
                    setPhoneFieldError('Only numbers allowed');
                } else if(!value.match(/^[0-9]{12}$/)) {
                    setPhoneFieldError('Should contain 12 characters');
                } else {
                    setPhoneFieldError('');
                    setPhoneFieldValid(true);
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields('name', user);
        validateFields('phone', phone);
        if(userFieldValid && phoneFieldValid) {
            onCloseModal();
            console.log('name: ' + user, 'phone: ' + phone);
        }
    };

    return (
        <div className="content__form">
            <div className="form">
                <span className="close" onClick={() => onCloseModal()}/>
                <p className="category">{category}</p>
                <h3 className="name">{name}</h3>
                <h2 className="price"><span>$</span>{price}</h2>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <h4>{userFieldError && 'Error'}</h4>
                        {userFieldError && <img src={error} alt=""/>}
                        <input
                            type="text"
                            placeholder="Name"
                            style={userFieldError.length > 0 ? {border: '1px solid #E43F3F'} : {border: '1px solid rgba(0, 0, 0, 0.2)'}}
                            name="name"
                            id="name"
                            value={user}
                            onChange={(e) => {handleChange(e, setUser, setUserFieldError)}}
                            onBlur={(e) => validateFields(e.target.name, user)}
                        />
                        <span>{userFieldError}</span>
                    </div>
                    <div className="form-group">
                        <h4>{phoneFieldError && 'Error'}</h4>
                        {phoneFieldError && <img src={error} alt=""/>}
                        <input type="tel"
                               placeholder="Number"
                               style={phoneFieldError.length > 0 ? {border: '1px solid #E43F3F'} : {border: '1px solid rgba(0, 0, 0, 0.2)'}}
                               name="phone"
                               id="phone"
                               value={phone}
                               onChange={(e) => handleChange(e, setPhone, setPhoneFieldError)}
                               onBlur={(e) => validateFields(e.target.name, phone)}
                        />
                        <span>{phoneFieldError}</span>
                    </div>
                    <div className="form-group">
                        <button>
                            <span>Order</span>
                            <span />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;