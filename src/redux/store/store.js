import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../reducers/reducerStore";

const store = configureStore({
    reducer: storeReducer,
})

export default store