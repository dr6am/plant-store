import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CustomBtn from '../custom-btn/custom-btn';
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom';
import { selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.scss'

const CartDropdown =({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
                cartItems.map(item=><CartItem key={item.id} item={item}/>)
                :
                (<span className="empty-message">Your cart is empty</span>)
        }
        </div>
        <CustomBtn onClick={()=>
            {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }
            
            } >Go To CheckOut</CustomBtn>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(CartDropdown));