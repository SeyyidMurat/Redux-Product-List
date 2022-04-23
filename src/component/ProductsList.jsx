import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const categoryItem = [
	{ id: 1, title: "All", category: "" },
	{ id: 2, title: "Men's Clothing", category: "men's clothing" },
	{ id: 3, title: "Women's Clothing", category: "women's clothing" },
	{ id: 4, title: "Jewelery", category: "jewelery" },
	{ id: 5, title: "Electronics", category: "electronics" },
];

const ProductsList = () => {
	const { data, error } = useFetch("https://fakestoreapi.com/products");
	const [products, setProducts] = useState(data);

	useEffect(() => {
		setProducts(data);
	}, [data]);

	if (error) {
		return <p>Error</p>;
	}

	const categoryFilter = (category) => {
		if (!category) {
			setProducts(data);
		} else {
			return setProducts(() =>
				data.filter((xl) => xl.category === category)
			);
		}
	};

	const Loading = () => {
		return (
			<div className="text-center fw--bolder display-5">
				<p>Loading....</p>
			</div>
		);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className="d-flex flex-wrap justify-content-center gap-4">
					{categoryItem.map((item) => (
						<button
							key={item.id}
							className="btn btn-outline-dark"
							onClick={() => categoryFilter(item.category)}
						>
							{item.title}
						</button>
					))}
				</div>
				{products.map((item) => (
					<div className="col-md-3" key={item.id}>
						<div className="card text-center shadow-sm p-1 ">
							<div className="ratio ratio-4x3">
								<img
									src={item.image}
									className="card-img-top shadow-sm"
									alt={item.title}
								/>
							</div>

							<div className="card-body">
								<h5 className="card-title">
									{item.title.substring(0, 12)}...
								</h5>
								<p className="card-text fw-bolder">
									${item.price}
								</p>
								<Link
									className="btn btn-outline-dark"
									to={`/products/${item.id}`}
								>
									Buy Now
								</Link>
							</div>
						</div>
					</div>
				))}
			</>
		);
	};

	return (
		<div className="container my-5">
			<h1 className="display-6 fw-bolder text-center">Products List</h1>
			<hr />
			<div className="row gy-5 mt-5 min-vh-25">
				{!products ? <Loading /> : <ShowProducts />}
			</div>
		</div>
	);
};

export default ProductsList;
