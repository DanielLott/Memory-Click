import React, { Component } from 'react';
import './App.css';
import PersonCard from "./components/personCard/PersonCard";
import Title from "./components/title/Title";
import Cards from "./components/cards/Cards";
import Ohana from "./components/ohana/Ohana";
import people from "./people.json";

// const lb = people.map(x => x);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScore: 0,
			topScore: 0,
			lastClickId: null,
			gatheredIDs: [],
			leftBehind: people.map(x => x),
			scoring: true,
		}
	}

	personClick(idP2) {
		console.log(this.state.gatheredIDs.length);
		// save current score in state to temp variable
		let currentScore = this.state.currentScore;
		// save gatheredIDs array to in state to temp variable
		let gatheredIDs = this.state.gatheredIDs;
		let leftBehind = this.state.leftBehind;
		// console.log(leftBehind);
		// console.log(gatheredIDs);
		// if all have not been gathered yet:
		if (this.state.gatheredIDs.length < people.length) {
			// if selection is not in gatheredIDs array:
			if (gatheredIDs.indexOf(idP2) === -1) {
				// push person's id to gatheredIDs array:
				gatheredIDs.push(idP2);
				// remove person from left behind
				delete leftBehind[idP2 - 1];
				// reset state:
				this.setState({
					// updating lastClickId:
					lastClickId: idP2,
					// and updating gatheredIDs and leftBehind
					gatheredIDs: gatheredIDs,
					leftBehind: leftBehind
				});
				console.log(this.state.gatheredIDs.length);
				if (this.state.scoring) {
					this.setState({
						// incrementing score
						currentScore: ++currentScore
					});
				}
				if (currentScore > this.state.topScore) {
					this.setState({
						topScore: currentScore
					})
				}
				if (currentScore === people.length) {
					this.setState({
						scoring: false
					})
				}

			} else {
				// // push person's id to gatheredIDs array:
				// gatheredIDs.push(idP2);
				// // remove person from left behind
				// delete leftBehind[idP2 - 1];
				// // reset state:
				this.setState({
					// updating lastClickId and scoring:
					lastClickId: idP2,
					scoring: false
				});
			}
		}
		// else if (this.state.gatheredIDs.length === people.length) {

		// }
	}

	shuffle(array) {
		for (let currEndIndex = array.length - 1; currEndIndex > 0; currEndIndex--) {
			const randIndexValue = Math.floor(Math.random() * (currEndIndex + 1));
			[array[currEndIndex], array[randIndexValue]] = [array[randIndexValue], array[currEndIndex]];
		}
		return array;
	}

	resetGame() {
		this.setState({
			currentScore: 0,
			lastClickId: null,
			gatheredIDs: [],
			leftBehind: people.map(x => x),
			scoring: true
		});
	}



	render() {
		// console.log(this.state.gatheredIDs);
		// console.log(this.state.leftBehind);
		console.log(people.length);
		console.log(this.state.gatheredIDs.length);
		return (
			<div>
				<Title
					lCN={(this.state.gatheredIDs.length === 0) ? (null) : (people[this.state.lastClickId - 1].name)}
					scoring={this.state.scoring}
					score={this.state.currentScore}
					maxScore={people.length}
					topScore={this.state.topScore}
					complete={this.state.gatheredIDs.length === people.length}
					subtitle="Don't leave anyone behind and don't forget who you've chosen!">
					Ohana Game
				</Title>
				<Cards>
					{
						(this.state.scoring)
							?
							(this.shuffle(people.map(hs =>
								<PersonCard
									click={() => this.personClick(hs.id)}
									key={hs.id}
									id={hs.id}
									name={hs.name}
									image={hs.image}
								/>
							)))
							:
							(this.state.gatheredIDs.length === people.length)
								?
								(<></>)
								:
								(this.state.leftBehind.map(hs =>
									<PersonCard
										click={() => this.personClick(hs.id)}
										key={hs.id}
										id={hs.id}
										name={hs.name}
										image={hs.image}
									/>
								))
					}
				</Cards>
				{
					(this.state.gatheredIDs.length === people.length)
						?
						(<Ohana
							win={this.state.currentScore===people.length}
							click={() => this.resetGame()}
						>
						</Ohana>)
						:
						(<></>)
				}
			</div >
		);
	}
}

export default App;
