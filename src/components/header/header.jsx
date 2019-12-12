import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.util';
import { connect } from 'react-redux';
import './header.scss';

const Header = ({currentUser})=>
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
                </ul>
            </nav>
    </header>
    <div id="header-space"></div>
    </React.Fragment>


const mapStateToProps= state=>({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);