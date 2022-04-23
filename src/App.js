import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
