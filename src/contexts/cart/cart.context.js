import {createContext,useState} from 'react';


const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
});
export default CartContext