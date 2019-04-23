import React from 'react';
import "./CurrentScore.css";

function CurrentScore(props) {
	return <div id="cs">{props.children}</div>
}

export default CurrentScore;