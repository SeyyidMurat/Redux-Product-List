import React from 'react';
import Button from './Button';
import {  useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSearch } from '../redux/productSlice';
const Navbar = (props) => {
	const { cart, products }  = useSelector((state) => state);
	const dispatch = useDispatch(); 
	let history = useHistory();
	return (
		<header className="nav">
			<div className="nav__wrapper container">
				<h2 className="nav__brand" onClick={()=>history.push('/')}>Product Shopping</h2>
				{
					props.location.pathname === '/cart' ? null : 
						<div className="nav__right">
							<div className="nav__search" aria-label="search-form">
								<input id="search" type="text" placeholder="Product Search" className="nav__search-input" value={products.searchProduct} onChange={(e)=>dispatch(setSearch(e.target.value))} />
								<label htmlFor="search" className="nav__search-icon">
									<i className='bx bx-search'></i>
								</label>
							</div>
							<Button icon="bx bx-cart" variant="outlined" badge={cart.cart.length} onClick={()=>props.history.push('/cart')}>Cart</Button>
						</div>
				}	
			</div>
			
		</header>
	);
};

export default Navbar;
