import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isValid:false,
    },
    reducers:{
        toggle(state){
            state.isValid = !state.isValid;
        }
    }
});

const authAction = authSlice.actions;

export default authAction;