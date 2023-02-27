import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: "cart",
    initialState:{
        items:[],
        searchContent:"",
        cartIsVisible: false,
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        addToCart(state,action){
            let newItem = action.payload;
            console.log(newItem)
            let existingItem = state.items.find(product => product.id === newItem.id);
            console.log(existingItem)
            if(!existingItem){
                state.items.push({...newItem})
            }else{
                existingItem.quantity++;
                existingItem.total = existingItem.price + newItem.price
            }
        },
        deleteToCart(state,action){
            state.items = state.items.filter(product => product.id !== action.payload)
        },
        ubdateSearch(state,action){
            state.searchContent = action.payload;
            
        },
        incrementQuantity(state,action){
            let item = state.items.find(product => product.id === action.payload);
            if(item){
                item.quantity++;
                item.total += item.price;  
            }
        },
        decrementQuantity(state,action){
            let item = state.items.find(product => product.id === action.payload);
            if(item){
                item.quantity--;
                item.total -= item.price;  
            }
        }
        
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;