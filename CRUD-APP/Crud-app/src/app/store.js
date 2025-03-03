import {configureStore} from "@reduxjs/toolkit";
import userDetail from "../features/userDetailsSlice.js"; // Ensure the correct path & extension

export const store = configureStore ({
    reducer: {
        app: userDetail,
    },
});

export default store;