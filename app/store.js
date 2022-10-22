import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slices/basketSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice
    }
})

export default store;






























// import { configureStore } from "@reduxjs/toolkit";
// import basketReducer from "..slices/basketSlice";

// // The GLOBAL STORE
// export const store = configureStore({
//     reducer: {
//         basket: basketReducer,
//     },
// })