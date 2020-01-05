import React, {useContext} from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.jsx'
import StripeCheckout from './../../components/stripe-btn/stripe-btn'
import {CartContext} from "../../providers/cart/cart.provider";
import './check-out.scss';

const CheckOutPage = () => {
	const {cartItems, total} = useContext(CartContext)
	return (
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
			{cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
			<div className="total">
				<h3 className="total-text">total:</h3>
				<h3 className="total-price">${total}</h3>
			</div>
			<div className="test-card">
				*Please use the following test credit card for payments*
				<br/>
				4242 4242 4242 4242 - Exp: 09/21 - CVV: 123
			</div>
			<StripeCheckout price={total}/>
		</div>
	)
}

export default CheckOutPage;