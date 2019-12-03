import React from "react";
import './preview-collection.scss';
import CollectionItem from './../collection-item/collection-item';


const PreviewCollection =({title,items,titleVis})=>//
{
 
  return(    
            <div className='collection-preview'>
                <h1 className="title">{titleVis && title}</h1>
                <div className="preview">
                    
                    {
                        titleVis && items.filter((item,idx)=> idx<5).map((item)=>(
                            <CollectionItem key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                        )) 
                    }
                    { !titleVis &&
                        items.map((item)=>(
                            <CollectionItem key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                        )) 
                    }
                </div>
                {//TODO:show more
                    }
            </div>)
 }       

export default PreviewCollection;