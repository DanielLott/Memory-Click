import React from 'react';
import "./PersonCard.css";

function PersonCard(props) {
	return (
		<div id="cards" className="d-inline-block m-1">
			<img
				alt={props.name}
				src={process.env.PUBLIC_URL + `/pictures/${props.image}`}
				className="img-thumbnail"
				onClick={props.click}
			/>
		</div>
	);
}

export default PersonCard;