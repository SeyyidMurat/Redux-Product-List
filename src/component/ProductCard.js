import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/cartSlice';
const ProductCard = (props) => {
	
	const dispatch = useDispatch();

	const textFormatting = (data,length) =>{
		const newText = data.length < length ? data : `${data.slice(0,length)}...`;
		return newText;
	};
	
	return (
		<div className="products__card">
			<div className="products__card-wrapper">
				<img src={props.product.image} alt="product-img" className="products__card-img" />    
				<div className="products__card-description">
					<h4 className="products__card-title" data-title={props.product.title}>{textFormatting(props.product.title, 25)}</h4>   
					<p>{textFormatting(props.product.description, 150)}</p>
					<div className="products__card-footer">
						<span className="products__card-price">{`${props.product.price} $`}</span>
						<Button variant="contained" size="sm" onClick={()=>dispatch(setCart(props.product))}>Add to cart</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
