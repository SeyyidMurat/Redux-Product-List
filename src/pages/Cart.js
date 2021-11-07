import React from 'react';
import { useSelector, /*  useDispatch */   } from 'react-redux';
import CartItem from '../component/CartItem';
import EmptyCart from '../component/EmptyCart';
const Cart = () => {
	const { cart } = useSelector((state) => state.cart);
	/* const dispatch = useDispatch(); */

	const allProductTotalPrice = (data) =>{
		return data.reduce((acc,item)=>{
			return acc += item.qty * item.price; 	
		},0);
		
	};

	
	return (
		cart.length === 0 ? <EmptyCart/> : 
			<div className="cart">
				<div className="container">
					<h4 className="cart__detail-title">Cart Detail</h4>
					<div className="cart__wrapper">
						<div className="cart__detail">		
							<div className="cart__detail-content">
								{
									cart.map((item)=>
										<CartItem key={item.id} item={item} />
									)
								}
							</div>
						</div>
						<div className="cart__summary">
							<div className="cart__summary-content">
								<h4 className="cart__summary-title">Cart Summary</h4>
								<p className="cart__summary-total">{`Total:${parseFloat(allProductTotalPrice(cart,2)).toFixed(2)}$`}</p>
							</div>		
						</div>		
					</div>
				</div>
			</div>
	);
};

export default Cart;
