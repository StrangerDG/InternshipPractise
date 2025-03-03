import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: { name: "", email: "" },
    reducers: {
        setUserDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
