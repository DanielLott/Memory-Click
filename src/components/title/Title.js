import React from 'react';
import "./Title.css";

function Title(props) {

	const messages = [
		"Pick each family member only once!",
		`${props.lCN} ! You have ${props.maxScore - props.score} left to gather!`,
		`Oops! Now gather the rest!`,
		`${props.lCN} was the last one! You've done it!`
	];

	let currentMessage;
	function calculateMessage(scoring, score, max, complete) {
		if (scoring) {
			if (score > 0 && score < max) {
				currentMessage = messages[1];
			} else {
				switch (score) {
					case null:
						currentMessage = messages[0];
						break;
					case max:
						currentMessage = messages[3];
						break;
					case 0:
						currentMessage = messages[0];
						break;

					default:
						;
						break;
				}

			}
		} else if (!complete) {
			currentMessage = messages[2];
		} else if (complete) {
			currentMessage = messages[3];
		}
		return currentMessage;
	}

	return (
		<div className="container-fluid pb-1 sticky-top bg-dark">
			<div className="row">
				<div className="col-7" id="main">{props.children}</div>
				<div className="col-3 score text-right">Score:</div>
				<div className="col-2 score">{props.score}</div>
			</div>
			<div className="row">
				<div className="col-8" id="sub">{props.subtitle}</div>
				<div className="col-2 topscore text-right">Top Score:</div>
				<div className="col-2 topscore">{props.topScore}</div>
			</div>
			<div className="row">
				<div
					className="border border-light rounded col-auto center m-2 mx-auto bg-dark text-warning font-weight-bold"
					id="message">
					{calculateMessage(props.scoring, props.score, props.maxScore, props.complete)}
				</div>
			</div>
		</div>
	)
}

export default Title;
