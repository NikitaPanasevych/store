import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import drawerReducer from './features/drawer-slice';
import searchReducer from './features/search.slice';
import emailReducer from './features/emailSlice';
import authReducer from './features/authSlice';
import { apiSlice } from './services/apiSlice';

export const store = configureStore({
	reducer: {
		drawerReducer,
		searchReducer,
		emailReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
