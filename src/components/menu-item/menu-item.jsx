import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';

 const MenuItem = ({ title, imageUrl, size,history,linkUrl })=>
    <div className={"menu-item "+size} onClick={(e)=>history.push(`/${linkUrl}`)}>
        <div style={{backgroundImage: `url(${imageUrl})` }} 
              className='background-image'/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>

export default withRouter(MenuItem);
