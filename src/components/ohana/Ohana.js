import React from 'react';
import "./Ohana.css";

function Ohana(props) {
	return (
		<div className="container pb-5 bg-light">
			<h1 className="display-2 text-center text-primary"
				onClick={props.click}
			>
			Ohana
			</h1>
			<h6 className="text-center">Click "Ohana" (above) to play again!</h6>
			{(props.win)
				?
				(<img
					alt="Lilo"
					src={process.env.PUBLIC_URL + `/pictures/LiloOhana.jpg`}
					className="lilo img-fluid mx-auto d-flex"
				/>)
				:
				(<></>)
			}
		</div>
	);
}

export default Ohana;