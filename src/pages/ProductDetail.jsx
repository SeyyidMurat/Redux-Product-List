import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/cartSlice";

const ProductDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { data, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
	const [productDetail, setProductDetail] = useState(data);

	useEffect(() => {
		setProductDetail(data);
	}, [data]);

	if (error) {
		return <p>Error</p>;
	}

	const Loading = () => {
		return (
			<div className="text-center fw--bolder display-5">
				<p>Loading....</p>
			</div>
		);
	};

	const ShowProduct = () => {
		return (
			<>
				<div className="col-lg-6">
					<img src={productDetail.image} alt={productDetail.title} height="400px" />
				</div>
				<div className="col-lg-6">
					<div className="vstack gap-3">
						<h4 className="text-uppercase text-black-50">{productDetail.category}</h4>
						<h2 className="display-5">{productDetail.title}</h2>
						<p className="lead fw-bolder text-black-50 d-flex align-items-center gap-2">
							Rating {productDetail?.rating?.rate}
							<i className="bx bx-star"></i>
						</p>
						<h3 className="display-6 fw-bolder">${productDetail?.price}</h3>
						<p className="lead">{productDetail?.description}</p>
						<div className="d-flex gap-4">
							<button className="btn btn-outline-dark" onClick={() => dispatch(setCart(productDetail))}>
								Add to Cart
							</button>
							<Link to="/cart" className="btn btn-outline-dark">
								Go to cart
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="pt-5 mt-5">
			<div className="container">
				<div className="row g-5">{!productDetail ? <Loading /> : <ShowProduct />}</div>
			</div>
		</div>
	);
};

export default ProductDetail;
