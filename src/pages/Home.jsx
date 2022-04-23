import React from "react";
import ProductsList from "../component/ProductsList";

const Home = () => {
	return (
		<>
			<div className="hero">
				<div className="card border-0">
					<img
						src="/img/background.jpg"
						className="card-img opacity-25 "
						alt="hero-img"
						height="750px"
					/>
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<div className="container">
							<div className="vstack gap-3">
								<h3 className="card-title display-3 fw-bolder">
									NEW SEASON PRODUCTS
								</h3>
								<h5 className="card-text display-6">
									Favorite Products
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-5">
				<ProductsList />
			</div>
		</>
	);
};

export default Home;
