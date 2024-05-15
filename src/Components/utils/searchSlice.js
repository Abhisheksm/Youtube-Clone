import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        cacheSearchResult : (state, action) =>{
            return {...state,...action.payload}
        }
    }
})
export const {cacheSearchResult} =searchSlice.actions
export default searchSlice.reducer