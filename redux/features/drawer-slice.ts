import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawerOpen: false,
};

const drawerReducer = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.drawerOpen = !state.drawerOpen;
        }, 
    },
});

export const { toggleDrawer } = drawerReducer.actions;
export default drawerReducer.reducer;

