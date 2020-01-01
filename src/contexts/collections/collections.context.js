import { createContext } from 'react';
import SHOP_DATA from "./shop.data";

const CollectionsCtx = createContext(SHOP_DATA)

export default CollectionsCtx;