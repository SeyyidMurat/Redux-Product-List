import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const linkItem = [
	{ id: 1, title: "Home", path: "/", disabled: false },
	{ id: 2, title: "Products", path: "/products", disabled: false },
	{ id: 3, title: "About", path: "/about", disabled: true },
];

const Navbar = () => {
	const { cart } = useSelector((state) => state.cart);

	let location = useLocation();

	const activeElement = linkItem.findIndex((item) => item.path === location.pathname);

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
				<div className="container">
					<Link className="navbar-brand fs-4" to="/">
						Collection
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto">
							{linkItem.map((item, index) => (
								<li className="nav-item fs-5" key={item.id}>
									<Link
										className={`nav-link ${activeElement === index ? "active" : ""} ${
											item.disabled && "disabled"
										}`}
										to={`${item.path}`}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
						<div className="d-flex gap-3">
							<Link to="/" className="btn btn-outline-secondary fs-5 btn-sm" disabled>
								<span className="me-2">
									<i className="bx bx-log-in"></i>
								</span>
								Login
							</Link>
							{location.pathname !== "/cart" && (
								<Link to="/cart" className="btn btn-outline-secondary fs-5 btn-sm position-relative">
									<span className="me-2">
										<i className="bx bx-cart "></i>
									</span>
									Cart
									{cart.length > 0 && (
										<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1 fs-6">
											{cart.length}
										</span>
									)}
								</Link>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
