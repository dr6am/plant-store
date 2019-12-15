import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector }from 'reselect';
import { selectCartItems,selectCartTotal } from './../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.jsx'


import './check-out.scss';

const  CheckOutPage= ({total,cartItems})=>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(item=><CheckoutItem key={item.id}  cartItem={item}/>) }
            <h3 className="total">total:${total}</h3>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps, null)(CheckOutPage);