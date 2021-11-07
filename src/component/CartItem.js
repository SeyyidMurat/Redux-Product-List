import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setQuantity,setDelete } from '../redux/cartSlice';
const CartItem = (props) => {

	const dispatch = useDispatch(); 

	return (
		<div className="cart__detail-item">
			<img src={props.item.image} alt="cart-img" />
			<div className="cart__detail-desc">
				<div className="cart__detail-desc-col">
					<h4>{props.item.price} $</h4>
				</div>
				<div className="cart__detail-desc-col">
					<p>{props.item.title}</p>
				</div>
				<div className="cart__detail-desc-col">
					<input type="number" 
						min="1" 
						value={props.item.qty}
						onChange={(e)=>dispatch(setQuantity({ id:props.item.id, target:Number(e.target.value) }))}
					/>
				</div>
				<div className="cart__detail-desc-col">
					<span>
						{`Product Total Price:${parseFloat(props.item.qty * props.item.price).toFixed(2)}$`}
					</span>
				</div>
				<div className="cart__detail-desc-col">		
					<Button 
						variant="danger" 
						size="sm" 
						onClick={()=>dispatch(setDelete(props.item.id))}
					>Delete
					</Button>
				</div>			
			</div>
			
		</div>
	);
};

export default CartItem;
