import { createSlice } from "@reduxjs/toolkit"; 

const initialState = [
    {id:1,title:"post-1",descrption:"Descrption 1"}
] 

const postslice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addpost:(state,action)=>{
            const{id,title,descrption}=action.payload;
            state.push({id,title,descrption})
        },
        deletepost:(state,action)=>{
            const postId=action.payload;
            return state.filter((post)=> postId !== post )
        }
    }

}) 
export const{addpost,deletepost} =postslice.actions; 
export default postslice.reducer;