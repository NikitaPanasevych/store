import { createSlice } from '@reduxjs/toolkit';
import { CartProductProps, ProductProps } from '../../models/shop.product';
import type { PayloadAction } from '@reduxjs/toolkit';

const getInitialCartState = (): CartProductProps[] => {
	if (typeof window !== 'undefined') {
		// Check if window is defined (i.e., if running in a browser)
		localStorage.setItem('cart', JSON.stringify([]));
		const savedCartState = localStorage.getItem('cart');
		return savedCartState ? JSON.parse(savedCartState) : [];
	} else {
		return [];
	}
};

const cartReducer = createSlice({
	name: 'cart',
	initialState: getInitialCartState(),
	reducers: {
		addToCartAction(state, action: PayloadAction<ProductProps>) {
			if (typeof window !== 'undefined') {
				const existingProduct = state.find((e: CartProductProps) => e.product.name === action.payload.name);
				if (existingProduct) {
					existingProduct.cartQuantity += 1;
				} else {
					state.push({ product: { ...action.payload }, cartQuantity: 1 });
				}
				localStorage.setItem('cart', JSON.stringify(state));
			}
		},
		removeFromCartAction(state, action: PayloadAction<ProductProps>) {
			if (typeof window !== 'undefined') {
				const existingProductIndex = state.findIndex((e) => e.product.name === action.payload.name);
				if (existingProductIndex !== -1) {
					if (state[existingProductIndex].cartQuantity > 1) {
						state[existingProductIndex].cartQuantity -= 1;
					} else {
						state.splice(existingProductIndex, 1);
					}
					localStorage.setItem('cart', JSON.stringify(state));
				}
			}
		},
	},
});

export const { addToCartAction, removeFromCartAction } = cartReducer.actions;
export default cartReducer.reducer;
