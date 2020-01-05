import React,{ useContext } from 'react';
import './checkout-item.scss';

import {CartContext} from "../../providers/cart/cart.provider";


const CheckoutItem = ({ cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    const {addItem, removeItem,clearItemFromCart} = useContext(CartContext);
    return (
        <div className="checkout-item">
            <div className="img-containter">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() =>removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() =>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-btn" onClick={() => clearItemFromCart(cartItem)}><p>&#10005;</p></div>
        </div>
    )
}
export default CheckoutItem;