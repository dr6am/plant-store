import React from 'react';
import CustomBtn from '../custom-btn/custom-btn';

import './cart-dropdown.scss'

const CartDropdown =()=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomBtn >Go To CheckOut</CustomBtn>
    </div>
)
export default CartDropdown;