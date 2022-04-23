import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setQuantity, setDelete } from "../redux/cartSlice";
const Cart = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const allProductTotalPrice = (data) => {
		return data.reduce((acc, item) => {
			return (acc += item.qty * item.price);
		}, 0);
	};

	const EmptyCart = () => {
		return (
			<>
				<div className="col-md-12 text-center">
					<p>Empty Card</p>
					<Link to="/"> Return Home Page</Link>
				</div>
			</>
		);
	};

	const ShowCart = () => {
		return (
			<>
				<div className="col-md-8 overflow-auto" style={{ height: "46rem" }}>
					<div className="vstack gap-5">
						{cart.map((item) => (
							<div className="card mb-3 border-0" key={item.id}>
								<div className="row">
									<div className="col-md-4">
										<img src={item.image} className="rounded-start" alt="cart-img" height="200px" />
									</div>
									<div className="col-md-8">
										<div className="card-body vstack gap-3">
											<h5 className="card-title">{item.title}</h5>
											<p className="fs-5 fw-bolder text-muted">{`$${item.price}`}</p>
											<div className="d-flex align-items-center gap-2">
												<button
													className="btn btn-secondary btn-sm"
													onClick={() =>
														dispatch(
															setQuantity({
																id: item.id,
																state: "negative",
															})
														)
													}
												>
													<i className="bx bx-minus"></i>
												</button>
												<span className="lead fw-bold">{item.qty}</span>
												<button
													className="btn btn-secondary btn-sm"
													onClick={() =>
														dispatch(
															setQuantity({
																id: item.id,
																state: "positive",
															})
														)
													}
												>
													<i className="bx bx-plus"></i>
												</button>
											</div>
											<div
												className="btn btn-danger align-self-start"
												onClick={() => dispatch(setDelete(item.id))}
											>
												Delete
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<h4 className="card-header">Your Cart</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item d-flex align-items-center gap-2">
								<span className="lead fw-bold">Total:</span>
								<span className="lead fw-bold text-muted">
									{`${parseFloat(allProductTotalPrice(cart, 2)).toFixed(2)}$`}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className=" mt-5 pt-5">
			<div className="container">
				<div className="row">{cart.length > 0 ? <ShowCart /> : <EmptyCart />}</div>
			</div>
		</div>
	);
};

export default Cart;
