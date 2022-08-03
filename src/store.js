import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./reducer";

export default configureStore({
    reducer: {
        channel: channelReducer
    },
});