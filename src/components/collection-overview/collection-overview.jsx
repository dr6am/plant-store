import React, { useContext } from 'react';

import PreviewCollection from "../preview-collection/preview-collection";
import CollectionsContext from '../../contexts/collections/collections.context';

import './collection-overview.scss'

const CollectionsOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(
        key => collectionsMap[key]
    );
    
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default CollectionsOverview;