import React from 'react';
import "./Cards.css";

function Cards(props) {
	return (
		<div className="container mt-2">
			{props.children}
		</div>
	)
}

export default Cards;