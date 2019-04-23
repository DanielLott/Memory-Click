import React, { Component } from 'react';
import './App.css';
import PersonCard from "./components/personCard/PersonCard";
import Wrapper from "./components/wrapper/Wrapper";
import Title from "./components/title/Title";
import Cards from "./components/cards/Cards";
import headshots from "./people.json";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pics: headshots,
			currentScore: 0,
			topScore: 0,
			gathered: [],
			message: "Pick each family member only once!"
		}
	}

	personClick(idP2, nameP2) {
		this.score(idP2, nameP2);
		this.shuffle();
	}

	score(idP3, nameP3) {
		// save current score in state to temp variable
		let currentScore = this.state.currentScore;
		// save gathered array to in state to temp variable
		let gathered = this.state.gathered;
		// if selection is not in gathered array, then do the following:
		if (gathered.indexOf(idP3) === -1) {
			// push id of selection to gathered array
			gathered.push(idP3);
			// reset state:
			this.setState({
				// incrementing score
				currentScore: ++currentScore,
				// and updating gathered array with new id added
				gathered: gathered
			});
			if (currentScore > this.state.topScore) {
				this.setState({
					topScore: currentScore
				})
			}
			// call alert method passing the current score as parameter (simplifies alert method code)
			this.alert(currentScore, nameP3);

		} else {
			this.setState({
				currentScore: 0,
				gathered: [],
				message: `You already picked ${nameP3}! Let's start again!`
			});
		}
	}

	alert(score, nameP4) {
		if (score > 0 && score < this.state.pics.length) {
			this.setState({
				message: `You chose ${nameP4}! You have ${this.state.pics.length - score} left to gather!`
			});
		} else {
			this.setState({
				message: `${nameP4} was the last one! You remembered the whole family!`
			});
		}
	}

	shuffle() {
		for (let currEndIndex = headshots.length - 1; currEndIndex > 0; currEndIndex--) {
			const randIndexValue = Math.floor(Math.random() * (currEndIndex + 1));
			[headshots[currEndIndex], headshots[randIndexValue]] = [headshots[randIndexValue], headshots[currEndIndex]];
		}

		this.setState({ pics: headshots });
	}



	render() {

		return (
			<Wrapper>
				<Title
					message={this.state.message}
					score={this.state.currentScore}
					topScore={this.state.topScore}
					subtitle="Don't leave anyone behind and don't forget who you've chosen!">
					Ohana Game
				</Title>
				<Cards>
					{this.state.pics.map(hs =>
						<PersonCard
							click={() => this.personClick(hs.id, hs.name)}
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
