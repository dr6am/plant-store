import React from 'react';

import  {connect } from 'react-redux'
 import {selectDirectorySections} from '../../redux/directory/directory.selectors'
 import { createStructuredSelector } from 'reselect'
import MenuItem from '../menu-item/menu-item';
import './directory.scss'

 const  Directory =({sections})=>{
        return(
            <div className="directory-menu">
                {sections.map(({id,size,imageUrl,title,linkUrl }) =>{
                    
                return(
                     <MenuItem key={id} title={title} linkUrl={linkUrl} size={size} imageUrl={imageUrl} />
                     )
                    }
                )}
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
 