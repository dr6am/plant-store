import React, {useContext} from 'react';
import CustomBtn from '../custom-btn/custom-btn';
import {CartContext} from "../../providers/cart/cart.provider";
import './collection-item.scss';

const CollectionItem = ({item}) => {
	const {id, name, price, imageUrl} = item
	const {addItem} = useContext(CartContext);
	return (
		<div key={id} className="collection-item">
			<div className="image" style={{
				backgroundImage: `url(${imageUrl})`
			}}/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomBtn inverted onClick={() => addItem(item)}>Add to cart</CustomBtn>
		</div>
	)
}
export default CollectionItem;