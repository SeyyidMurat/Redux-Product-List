import React,{ useEffect  } from 'react';
import { useSelector,  useDispatch   } from 'react-redux';
import ProductCard from '../component/ProductCard';
import { getProducts } from '../redux/productSlice';
const Product = () => {
	const { product, loading, error, searchProduct } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className="products">
			<div className="container">
				<div className="products__wrapper">
					{
						error && <h2>{error}</h2>
					}
					{
						loading && <h2>Page Loding...</h2>
					}
					{
						product.filter((val)=>searchProduct === '' ? val : val.title.toLowerCase().includes(searchProduct.trim().toLowerCase()))
							.map((item)=>
								<ProductCard key={item.id} product={item} />
							)
					}
				</div>
			</div>
		</div>
	);
};

export default Product;
