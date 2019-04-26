import React from 'react';
import "./Cards.css";


function Cards(props) {
	return (
		<div className="container mt-3">
			<div className="row p-0">
				<div className="col-4 col-sm-3 p-0">
					{props.children[0]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[1]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[2]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[3]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[4]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[5]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[6]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[7]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[8]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[9]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[10]}
				</div>
				<div className="col-4 col-sm-3 p-0">
					{props.children[11]}
				</div>
			</div>
		</div>
	);
}

export default Cards;