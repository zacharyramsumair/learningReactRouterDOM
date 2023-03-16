import { useState } from "react";
import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Error from "./pages/Error";
import NewMovie from "./pages/NewMovie";
import CatalogLayout from "./CatalogLayout";
import Navbar from "./Navbar";

function App() {
	return (
		<main className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route
						path="/catalog"
						element={<h1>Steam from anywhere. Up to 10 devices!</h1>}
					/>
					<Route
						path="/catalog/:movieName"
						element={<h1>Steam from anywhere. Up to 10 devices!</h1>}
					/>
					<Route path="/catalog/new" element={null} />
				</Routes>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<CatalogLayout />}>
						<Route index element={<Catalog />} />
						<Route path="new" element={<NewMovie />} />
						<Route path=":movieName" element={<Catalog />} />
					</Route>

					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
