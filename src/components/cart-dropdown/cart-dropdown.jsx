import React,{useContext} from 'react';
import CustomBtn from '../custom-btn/custom-btn';
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom';
import {CartContext} from "../../providers/cart/cart.provider";
import './cart-dropdown.scss'

const CartDropdown =({history})=>{
    const {cartItems,toggleHidden } = useContext(CartContext);
    return(
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
                toggleHidden()
            }
            
            } >Go To CheckOut</CustomBtn>
    </div>
)}

export default withRouter(CartDropdown);