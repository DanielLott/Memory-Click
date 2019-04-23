import React from 'react';
import "./Title.css";

function Title(props) {
	return (
		<div className="container-fluid sticky-top bg-dark">
			<div className="row">
				<div className="col-7" id="main">{props.children}</div>
				<div className="col-3 score text-right">Score:</div>
				<div className="col-2 score">{props.score}</div>
				<div className="col-8" id="sub">{props.subtitle}</div>
				<div className="col-2 topscore text-right">Top Score:</div>
				<div className="col-2 topscore">{props.topScore}</div>
			</div>
			<div
				className="mx-auto"
				id="message">
				{props.message}
			</div>
		</div>
	)
}

export default Title;
