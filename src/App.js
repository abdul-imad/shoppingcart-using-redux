import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/cart" component={Cart} />
				<Route path="/product" component={ProductPage} />
				<Route path="/" exact component={Home} />
				<Redirect to="/"></Redirect>
			</Switch>
		</BrowserRouter>
	);
}
