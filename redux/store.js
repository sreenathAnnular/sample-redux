import { configureStore } from "@reduxjs/toolkit"; 
import postslice from "./slice/postslice";

export const store=configureStore({
    reducer:{
        posts:postslice,

    }
})