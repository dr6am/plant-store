import React from 'react';
import './homepage.scss'
import  Directory  from '../../components/directory/directory';

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="homepage">
                <Directory />
            </div>
        </React.Fragment>
    )
}
export default HomePage;