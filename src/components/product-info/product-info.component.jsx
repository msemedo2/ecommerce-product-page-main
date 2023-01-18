import { useState } from 'react';

import './product-info.styles.scss';

const ProductInfo = () => {
	const [amount, setAmount] = useState(0);
	const [totalAmount, setTotalAmount] = useState(125);

	const addOne = () => {
		setAmount(amount + 1);
		setTotalAmount(totalAmount + 125);
	};
	const subtractOne = () => {
		if (amount === 0) {
			return;
		}
		setAmount(amount - 1);
		setTotalAmount(totalAmount - 125);
	};

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
				<p className="price">{`${totalAmount}.00$`}</p>
				<p className="discount">50%</p>
			</div>
			<p className="original-price">$250.00</p>
			<div className="quantity-add-container">
				<div className="quantity-container">
					<button onClick={subtractOne} className="button">
						-
					</button>
					<p className="amount">{amount}</p>
					<button onClick={addOne} className="button">
						+
					</button>
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
