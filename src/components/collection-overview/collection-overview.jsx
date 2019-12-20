import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from './../preview-collection/preview-collection';
import './collection-overview.scss';
import {selectCollectionsOverview} from '../../redux/shop/shop.selector'
const CollectionOverview = ({collections})=>(
    <div className="collection-overview">
        {
        collections
                   .map(collection => <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsOverview
})

export default connect(mapStateToProps)(CollectionOverview);