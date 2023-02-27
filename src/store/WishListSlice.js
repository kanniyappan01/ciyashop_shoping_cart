import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        items:[],
        isVisible: false,
    },
    reducers:{
        toggle(state){
            state.wishlist = !state.wishlist
        },
        addItemToWishList(state,action){
            let newItem = action.payload;
            console.log(newItem)
            let existingItem = state.items.find(product => product.id === newItem.id);
            console.log(existingItem)
            if(!existingItem){
                state.items.push({
                    ...newItem,
                })
            }
        },
        deleteToWishList(state,action){
            state.items = state.items.filter(product => product.id !== action.payload)
        }
    }
});

export const whishListActions = wishListSlice.actions;

export default wishListSlice;