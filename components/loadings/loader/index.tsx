import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className="flex w-full h-full justify-center align-middle">
			<FallingLines visible={true} height="100" width="100" color="#000000" />
		</div>
	);
};

export default Loader;
