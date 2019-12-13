import React from 'react';
import CustomBtn from '../custom-btn/custom-btn';
import {connect}from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.scss';

const CollectionItem = ({item,addItem})=>{
    const {id, name, price, imageUrl} = item
    return(
    <div key={id} className="collection-item" >
        <div className="image" style={{
            backgroundImage:`url(${imageUrl})` 
        }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomBtn inverted onClick={()=>addItem(item)}>Add to cart</CustomBtn>
    </div>
    )}
    const mapDispatchToProps = (dispatch)=>({
        addItem:item=>{dispatch(addItem(item))}
    })
export default connect(null,mapDispatchToProps)(CollectionItem);