import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    data: null,
    token: null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state: any, action: any) => {
            state.data = action.payload;
        },
        setToken: (state: any, action: any) => {
            state.token = action.payload;
        },
        removeData: (state: any) => {
            state.data = null;
        },
        removeToken: (state: any) => {
            state.token = null;
        }
    }
});

export const {
    setData,
    setToken,
    removeData,
    removeToken
} = userSlice.actions;


export default userSlice.reducer;