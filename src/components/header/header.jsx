import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = ({subTitle})=>
    <React.Fragment>
    <header>
        <div className="title">
            <Link to="/" className="logo">Logo</Link>
            <p>{typeof subTitle === 'string'  && subTitle}</p>
        </div>
        
        <nav className="navigation-menu">
                <ul>
                    <li><Link to="/shop">shop</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li>sign in</li>
                </ul>
            </nav>
    </header>
    <div id="header-space"></div>
    </React.Fragment>

export default Header;