import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice';
import wishListSlice from './WishListSlice';
import authAction from "./AuthSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishList: wishListSlice.reducer,
        authentication: authAction.reducer
    }
});

export default store;