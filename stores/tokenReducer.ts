import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    jwt: ''
}

export const tokenReducer = createSlice({
    name: "token",
    initialState: initialState,
    reducers: {
        setToken: (state: any, action: PayloadAction<string>) => {
            state.jwt = action.payload;
        },
    },
});

export const { setToken } = tokenReducer.actions;
export default tokenReducer.reducer;