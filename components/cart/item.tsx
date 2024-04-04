import React from 'react';

const Item = (props: any) => {
	const { product } = props;

	return (
		<li key={product.id} className="flex py-6">
			<div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img src={product.image} alt={product.name} className="h-full w-full object-contain object-center" />
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-xl font-medium text-gray-900">
						<h3>
							<a href={'/shop/' + product.name.replace(/ /g, '-')}>
								{product.name.length > 25 ? product.name.substring(0, 25) + '...' : product.name}
							</a>
						</h3>
						<p className="ml-4">{product.price} $</p>
					</div>
					<p className=" text-lg text-gray-500">{product.volume} ml</p>
				</div>
				<div className="flex flex-1 items-end justify-between text-xl">
					<p className="text-gray-500">Quantity {props.qnt ? props.qnt : product.cartQuantity}</p>

					<div className="flex">
						<button type="button" className="font-medium text-active hover:text-indigo-500">
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Item;
