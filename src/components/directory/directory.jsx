import React,{useContext} from 'react';
import DirectoryContext from "../../contexts/directory/directory.context";
import MenuItem from '../menu-item/menu-item';
import './directory.scss'

 const  Directory =()=>{
    const sections = useContext(DirectoryContext);
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

export default Directory;
 