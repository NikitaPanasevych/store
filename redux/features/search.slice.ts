import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   searchOpen: false,
};

const searchReducer = createSlice({
   name: 'search',
   initialState,
   reducers: {
      toggleSearch: (state) => {
         state.searchOpen = !state.searchOpen;
      },
   },
});

export const { toggleSearch } = searchReducer.actions;
export default searchReducer.reducer;
