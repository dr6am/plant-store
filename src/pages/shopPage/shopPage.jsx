import React from 'react'
import './shopPage.scss';
import {Route} from 'react-router-dom';

import CollectionsOverviewContainer from './../../components/collection-overview/collection-overview.container'
import CollectionContainer from './../collection/collection.container'


class ShopPage extends React.Component {
	
	render() {
		const {match} = this.props
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
				<Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
			</div>
		)
	}
}


export default ShopPage;