import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import ProductSlice from './ProductSlice'

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        Product:ProductSlice,
    }
});

export default Store;