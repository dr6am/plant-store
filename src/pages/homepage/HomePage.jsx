import React from 'react';
import './homepage.scss'
import  Directory  from '../../components/directory/directory';
import  Header from './../../components/header/header';

const HomePage = () => {
    return(
        <React.Fragment>
            <Header />
            <div className="homepage">
                <Directory />
            </div>
        </React.Fragment>
    )
}
export default HomePage;