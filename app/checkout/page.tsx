import React from 'react';
import { CheckoutForm } from './form';
import Summary from './summary';

const Checkout = () => {
	return (
		<main className=" w-[100vw] h-[100vh] px-10 py-20 gap-10 flex flex-col xl:grid xl:grid-cols-2 md:px-32">
			<Summary />
			<CheckoutForm />
		</main>
	);
};

export default Checkout;
