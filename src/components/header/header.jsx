import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown'
import './header.scss';


import {CartContext} from "../../providers/cart/cart.provider";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import {auth} from "../../firebase/firebase.util";


const Header = () => {
	const currentUser = useContext(CurrentUserContext);
	const {hidden} = useContext(CartContext);
	return (
		<React.Fragment>
			<header>
				<div className="title">
					<Link to="/" className="logo">Logo</Link>
					
				</div>
				
				<nav className="navigation-m enu">
					<ul>
						
						<li><Link to="/shop/mens">Men</Link></li>
						<li><Link to="/shop/womens">Women</Link></li>
						
						<li>{
							currentUser ?
								<div className="option" onClick={() => auth.signOut()}>Sign out</div> :
								<Link to="/login">Sign in</Link>
						}</li>
						<li>
							<CartIcon/>
						</li>
					</ul>
					{!hidden && (<CartDropdown/>)}
				</nav>
			
			</header>
			<div id="header-space"/>
		</React.Fragment>)
};


export default Header;