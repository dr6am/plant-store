import React,{createContext,useState,useEffect} from 'react';
import {addItemToCart,removeItemFromCart,getCartItems,getTotal} from  "./cart.utils";

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {
	},
	cartItems: [],
	addItem: () => {
	},
	
	removeItem: () => {
	},
	clearItemFromCart: () => {
	},
	cartItemsCount: 0,
	total:0
})

const CartProvider = ({children}) => {
	const [hidden,setHidden] = useState(true);
	const [cartItems,setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0)
	useEffect(()=>{
		setCartItemsCount(getCartItems(cartItems))
	}, [cartItems])
	const addItem = item => setCartItems(addItemToCart(cartItems, item))
	const removeItem = item => setCartItems(removeItemFromCart(cartItems,item));
	const toggleHidden = ()=>setHidden(!hidden);
	const clearItemFromCart = item => {setCartItems(cartItems.filter(
		cartItem => cartItem.id !== item.id
	))}
	const total = getTotal(cartItems)
	return <CartContext.Provider value={{hidden,clearItemFromCart,toggleHidden,cartItems,addItem,total,cartItemsCount,removeItem}}>{children}</CartContext.Provider>
}
export default CartProvider;

