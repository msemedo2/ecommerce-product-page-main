import { useState } from 'react';

import ProductImage from './components/product-image/product-image.component';
import './App.scss';

const App = () => {
	const [image, setImage] = useState('1');
	const thumbnails = [
		{
			id: 1,
			thumbnail: 'image-product-1-thumbnail.jpg',
		},
		{
			id: 2,
			thumbnail: 'image-product-2-thumbnail.jpg',
		},
		{
			id: 3,
			thumbnail: 'image-product-3-thumbnail.jpg',
		},
		{
			id: 4,
			thumbnail: 'image-product-4-thumbnail.jpg',
		},
	];

	const handleHover = (e) => {
		const { id } = e.target;
		setImage(id);
	};

	return (
		<div className="app-container">
			<ProductImage
				thumbnails={thumbnails}
				handleHover={handleHover}
				image={image}
			/>
		</div>
	);
};

export default App;
