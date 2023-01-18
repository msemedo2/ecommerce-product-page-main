import './product-image.styles.scss';

const ProductImage = ({ thumbnails, handleHover, image }) => {
	return (
		<>
			<div className="image-product-container">
				<img
					className="image-product"
					src={`../public/image-product-${image}.jpg`}
					alt="image product"
				/>
			</div>
			<div className="thumbnail-container">
				{thumbnails.map(({ thumbnail, id }) => {
					return (
						<div className="thumbnail-image-container" key={id}>
							<img
								onMouseOver={handleHover}
								className="thumbnail-image"
								id={id}
								src={`../public/${thumbnail}`}
								alt="thumbnail-image"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProductImage;
