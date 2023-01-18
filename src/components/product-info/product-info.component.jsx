import './product-info.styles.scss';

const ProductInfo = () => {
	return (
		<div className="product-info-section">
			<p className="title">SNEAKER COMPANY</p>
			<h1 className="product-title">Fall Limited Edition Sneakers</h1>
			<p className="product-description">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole.they'll withstand everything the
				weather can offer.
			</p>
			<div className="price-container">
				<p className="price">$125.00</p>
				<p className="discount">50%</p>
			</div>
			<p className="original-price">$250.00</p>
			<div className="quantity-add-container">
				<div className="quantity-container">
					<button class="button">-</button>
					<p className="amount">0</p>
					<button class="button">+</button>
				</div>
				<button className="add-to-cart">
					<img className="cart" src="../public/icon-cart.svg" alt="cart" />
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductInfo;
