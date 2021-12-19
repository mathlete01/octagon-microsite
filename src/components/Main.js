import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Contact from "../components/Contact";

const Main = () => {
	return (
		<Routes>
			{/* The Routes decides which component to show based on the current URL */}
			<Route path="/" element={<Home />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
		</Routes>
	);
};

export default Main;
