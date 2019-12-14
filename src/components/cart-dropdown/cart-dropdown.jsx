import React from 'react';
import {connect} from 'react-redux';
import CustomBtn from '../custom-btn/custom-btn';
import CartItem from '../cart-item/cart-item'

import './cart-dropdown.scss'

const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {cartItems.map(item=><CartItem key={item.id} item={item}/>)
        
        }
        </div>
        <CustomBtn >Go To CheckOut</CustomBtn>
    </div>
)
const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps,null)(CartDropdown);