import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	email: '',
};

const emailReducer = createSlice({
	name: 'email',
	initialState,
	reducers: {
		changeEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
	},
});

export const { changeEmail } = emailReducer.actions;
export default emailReducer.reducer;
