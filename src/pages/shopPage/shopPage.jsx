import React from 'react'
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection';
import './shopPage.scss';


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "collections":   SHOP_DATA
        }
    }
    path = this.props.history.location.pathname.substring(6);
    render(){
        const {collections}= this.state
        return(
            <div className='shop-page'>
                <h1>{ this.path.length > 0 && collections.filter((item)=>item.routeName === this.path )[0].title}
                </h1>
                
                
                {this.path.length > 0 &&
                    collections
                        .filter((item,idx)=>item.routeName === this.path )
                        .map(collection => <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>)
                }
                {this.path.length === 0 &&
                    collections
                        
                        .map(collection => <PreviewCollection key={collection.id} title={collection.title} titleVis={true} items={collection.items}/>)
                }
                
            </div>
        )
    }
}
export default ShopPage;