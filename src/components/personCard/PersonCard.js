import React from 'react';
import "./PersonCard.css";

function PersonCard(props) {
	return (
		<div className="m-2">
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