import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, pickUpItem } from '../../redux/cart/cart.actions'
const CheckoutItem = ({ cartItem, clearItem,minusOne,plusOne }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="img-containter">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() =>minusOne(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() =>plusOne(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-btn" onClick={() => clearItem(cartItem)}><p>&#10005;</p></div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem:item => dispatch(removeItem(item)),
    minusOne: item => dispatch(pickUpItem(item)),
    plusOne:  item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);