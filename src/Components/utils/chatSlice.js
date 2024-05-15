import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MESSAGE_LIMIT } from "../Config/Constants";

const chatSlice = createSlice({
    name: 'liveChat',
    initialState:{
        messages :[]
    },
    reducers:{
        addMessages : (state, action) =>{
         state.messages.splice(LIVE_CHAT_MESSAGE_LIMIT,1)
         state.messages.unshift(action.payload)
        },
    }
})

export const {addMessages} = chatSlice.actions

export default chatSlice.reducer