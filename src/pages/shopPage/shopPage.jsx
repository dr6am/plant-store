import React from 'react'
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection';
import './shopPage.scss';
import  Header from './../../components/header/header';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "collections":   SHOP_DATA
        }
    }
    render(){
        const {collections}= this.state
        const path = this.props.history.location.pathname.substring(6);
        return(
            <div className='shop-page'>
                <Header subTitle={path.length > 0 && collections
                        .filter((item,idx)=>item.routeName === path )[0].title}/>
                
                {path.length > 0 &&
                    collections
                        .filter((item,idx)=>item.routeName === path )
                        .map(collection => <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>)
                }
                {path.length === 0 &&
                    collections
                        
                        .map(collection => <PreviewCollection key={collection.id} title={collection.title} titleVis={true} items={collection.items}/>)
                }
                
            </div>
        )
    }
}
export default ShopPage;