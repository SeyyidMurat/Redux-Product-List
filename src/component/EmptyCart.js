import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
	return (
		<div className="empty__cart">
			<h3>Empty Cart</h3>
			<Link to="/">Back To Product list</Link>
		</div>
	);
};

export default EmptyCart;
