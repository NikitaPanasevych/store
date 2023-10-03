// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export interface swiperProps {
	children: React.ReactNode;
}

export default (props: swiperProps) => {
	const { children } = props;

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
		>
			{children}
		</Swiper>
	);
};
