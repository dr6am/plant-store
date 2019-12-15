import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.util';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden }from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from './../cart-icon/cart-icon';
import CartDropdown from './../cart-dropdown/cart-dropdown'
import './header.scss';

const Header = ({currentUser, hidden})=>
    <React.Fragment>
    <header>
        <div className="title">
            <Link to="/" className="logo">Logo</Link>
            {/*<p>{typeof subTitle === 'string'  && subTitle}</p>*/}
        </div>
        
        <nav className="navigation-menu">
                <ul>
                    <li><Link to="/shop">shop</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li>{
                        currentUser ?
                        <div className="option" onClick={(e)=>{e &&e.preventDefault(); auth.signOut()}}>sign out</div>:
                        <Link to="/login">sign in</Link>
                    }</li>
                    <li><CartIcon/></li>
                </ul>
                {!hidden && (<CartDropdown/>)}
            </nav>

    </header>
    <div id="header-space"></div>
    </React.Fragment>


const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden  
})
export default connect(mapStateToProps)(Header);