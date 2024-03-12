import React from 'react';
import { CartProductProps } from '@/models/shop.product';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ product }: { product: CartProductProps }) => {
	const { name, cartQuantity, price, volume, image, id } = product;
	const dispatch = useDispatch();

	const addToCartHandler = (product: CartProductProps) => {
		dispatch(addToCart(product));
	};

	const removeFromCartHandler = (product: CartProductProps) => {
		dispatch(removeFromCart(product));
	};

	return (
		<li key={id} className="flex py-6">
			<div className="h-72 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
				<img src={image} alt={name} className="h-full w-full object-contain object-center" />
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-3xl font-medium text-gray-900">
						<h3>
							<a href={'/shop/' + product.name.replace(/ /g, '-')}>{name}</a>
						</h3>
						<p className="">Quantity: {cartQuantity}</p>
						<p className="ml-4">Price: {price} $</p>
						<p className="ml-4">Total: {price * cartQuantity} $</p>
						<div className="flex gap-16">
							<button
								onClick={() => removeFromCartHandler(product)}
								type="button"
								className="font-medium text-active hover:text-indigo-500"
							>
								Remove
							</button>
							<button
								onClick={() => addToCartHandler(product)}
								type="button"
								className="font-medium text-green-400 hover:text-indigo-500"
							>
								Add
							</button>
						</div>
					</div>
					<p className=" text-2xl text-gray-500 mt-2">{volume} ml</p>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
