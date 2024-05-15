import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import ListVideoSlice from './ListVideoSlice';
import chatSlice from './chatSlice';
const store = configureStore({
    reducer :{
        app: appSlice,
        search : searchSlice,
        videoList : ListVideoSlice,
        liveMessages : chatSlice
    }
})

export default store;