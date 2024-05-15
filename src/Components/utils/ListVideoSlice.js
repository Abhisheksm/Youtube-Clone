import { createSlice } from "@reduxjs/toolkit";

const listVideoSlice = createSlice({
    name: 'listVideo',
    initialState:{
        videos : []
    },
    reducers: {
        setVideoList : (state, action) =>{
         state.videos = action.payload
        }
    }
})

export const {setVideoList} = listVideoSlice.actions

export default listVideoSlice.reducer