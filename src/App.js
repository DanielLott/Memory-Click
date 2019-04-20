import React, { Component } from 'react';
import './App.css';
import PersonCard from "./components/personCard/PersonCard";
import Wrapper from "./components/wrapper/Wrapper";
import Title from "./components/title/Title";
import Cards from "./components/cards/Cards";
import headshots from "./people.json";

class App extends Component {
	state = {
		pics: headshots,

	}

	shuffle() {
		let currentIndex = headshots.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = headshots[currentIndex];
			headshots[currentIndex] = headshots[randomIndex];
			headshots[randomIndex] = temporaryValue;
		}

		this.setState({ pics: headshots });
	}



render() {
	return (
		<Wrapper>
			<Title
				subtitle="Don't click the same person twice, and watch out, these guys are on the move!">
				Memory Game
				</Title>
			<Cards>
				{this.state.pics.map(hs =>
					<PersonCard
						click={() => this.shuffle()}
						key={hs.id}
						id={hs.id}
						name={hs.name}
						image={hs.image}
					/>
				)}

			</Cards>
		</Wrapper>
	);
}
}

export default App;
