import { createSelector } from 'reselect';


const selectShop = state =>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop=> shop.collections
)

export const selectCollection = collectionUrlParam=>createSelector(
    [selectCollections],
    collections=>(collections?
        collections[collectionUrlParam]:null)
)

export const selectCollectionsOverview = createSelector(
    [selectCollections],
    shop=> shop ? Object.keys(shop).map(key=>shop[key]) : []
)
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop=> !!shop.collections
)