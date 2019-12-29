import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown'
import './header.scss';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOutStart}) =>
	<React.Fragment>
		<header>
			<div className="title">
				<Link to="/" className="logo">Logo</Link>
			
			</div>
			
			<nav className="navigation-menu">
				<ul>
					<li><Link to="/shop">shop</Link></li>
					<li><Link to="/contact">contact</Link></li>
					<li>{
						currentUser ?
							<div className="option" onClick={signOutStart}>sign out</div> :
							<Link to="/login">sign in</Link>
					}</li>
					<li><CartIcon/></li>
				</ul>
				{!hidden && (<CartDropdown/>)}
			</nav>
		
		</header>
		<div id="header-space"></div>
	</React.Fragment>;


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);