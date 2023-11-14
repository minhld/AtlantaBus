import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
    name: 'settings',
    initialState: {
        language: 'en',
        apiServer: 'http://www.atlanta.org'
    },
    reducers: {
        language: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { language } = settings.actions;
