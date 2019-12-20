import { createSelector } from 'reselect';


const selectShop = state =>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop=> shop.collections
)
export const selectCollection = collectionUrlParam=>createSelector(
    [selectCollections],
    collections=>
        collections[collectionUrlParam]
)
//Collection
export const selectCollectionsOverview = createSelector(
    [selectCollections],
    shop=> Object.keys(shop).map(key=>shop[key])
)