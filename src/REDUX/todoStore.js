import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";

const todoStore=configureStore({
    reducer:{
        addReducer:addSlice

    }
})
export default todoStore