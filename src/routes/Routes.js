import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Product} />
			<Route path="/cart" exact component={Cart} />
		</Switch>
	);
};

export default Routes;