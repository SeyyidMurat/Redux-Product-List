import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from '../routes/Routes';
const Layout = () => {
	return (
		<Router>
			<Route render={props => 
				<div className="main">
					<Navbar {...props} />
					<div className="content">
						<Routes />						
					</div>
					
				</div>
			}>

			</Route>
		</Router>
	);
};

export default Layout;