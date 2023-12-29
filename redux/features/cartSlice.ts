import { createSlice } from '@reduxjs/toolkit';
import { CartProductProps } from '../../models/shop.product';
import type { PayloadAction } from '@reduxjs/toolkit';

const cartReducer = createSlice({
	name: 'cart',
	initialState: [] as CartProductProps[],
	reducers: {
		addToCart(state, action: PayloadAction<CartProductProps>) {
			if (state.find((e) => e.name === action.payload.name)) {
				const count = state.find((e) => e.name === action.payload.name);
				return [
					...state.filter((e) => e.name !== action.payload.name),
					//@ts-ignore
					{ ...action.payload, cartQuantity: count?.cartQuantity + 1 },
				];
			} else {
				return [...state, { ...action.payload, cartQuantity: 1 }];
			}
		},
		removeFromCart(state, action) {
			if (action.payload.cartQuantity !== 1) {
				return [
					...state.filter((e) => e.name !== action.payload.name),
					{ ...action.payload, cartQuantity: action.payload.cartQuantity - 1 },
				];
			} else {
				return state.filter((e) => e.id !== action.payload.id);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
