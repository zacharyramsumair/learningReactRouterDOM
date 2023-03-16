import React from "react";
import { useParams, Link } from "react-router-dom";

function Catalog() {
	let { movieName } = useParams();
	return (
		<>
			<div>Catalog of movies</div>
			
			{movieName !== undefined ? <p>Watch {movieName} now</p> : null}
		</>
	);
}

export default Catalog;
