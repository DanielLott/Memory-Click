import React from 'react';
import "./Title.css";

function Title(props) {
	return (
		<div className="container-fluid sticky-top bg-dark">
			<div className="row">
				<div className="col-8" id="main">{props.children}</div>
				<div className="col-2 score">Score:</div>
				<div className="col-2 score"></div>
				<div className="col-8" id="sub">{props.subtitle}</div>
				<div className="col-2 score">Top Score:</div>
				<div className="col-2 score"> </div>
			</div>
			<div
				className="mx-auto"
				id="message">
				Message from game
			</div>
		</div>
	)
}

export default Title;
