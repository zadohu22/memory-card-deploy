import React, { useState, useEffect } from 'react';
import Cell from './components/Cell';
import fetchPokemonData from './components/FetchPokemonData';
import shuffle from './components/Shuffle';

const App = () => {
	const [mons, setMons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentCounter, setCurrentCounter] = useState(0);
	const [highScoreCounter, setHighScoreCounter] = useState(0);

	const getArrayOfPokemon = async () => {
		let response = await fetchPokemonData;
		setMons(response);
		console.log(mons);
		setIsLoading(false);
	};

	const handleClick = (event) => {
		// if the current mon has not been clicked yet
		if (!mons[event.currentTarget.id].clicked === true) {
			mons[event.currentTarget.id].clicked = true;
			setCurrentCounter(currentCounter + 1);
			if (currentCounter >= highScoreCounter) {
				setHighScoreCounter(highScoreCounter + 1);
			}

			// if the current mon has been clicked
		} else {
			setCurrentCounter(0);
			mons.forEach((mon) => {
				if (mon.clicked === true) {
					mon.clicked = false;
				}
			});
		}

		console.log(event.currentTarget);
		shuffle(mons);
		setMons([...mons]);
	};

	useEffect(() => {
		getArrayOfPokemon();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div>Current Score: {currentCounter}</div>
			<div>High Score: {highScoreCounter}</div>
			<div className='grid grid-rows-2 grid-cols-4 sm:grid-rows-12 sm:grid-cols-1'>
				<Cell mon={mons[0].sprites.front_default} click={handleClick} id={0} />
				<Cell mon={mons[1].sprites.front_default} click={handleClick} id={1} />
				<Cell mon={mons[2].sprites.front_default} click={handleClick} id={2} />
				<Cell mon={mons[3].sprites.front_default} click={handleClick} id={3} />
				<Cell mon={mons[4].sprites.front_default} click={handleClick} id={4} />
				<Cell mon={mons[5].sprites.front_default} click={handleClick} id={5} />
				<Cell mon={mons[6].sprites.front_default} click={handleClick} id={6} />
				<Cell mon={mons[7].sprites.front_default} click={handleClick} id={7} />
				<Cell mon={mons[8].sprites.front_default} click={handleClick} id={8} />
				<Cell mon={mons[9].sprites.front_default} click={handleClick} id={9} />
				<Cell
					mon={mons[10].sprites.front_default}
					click={handleClick}
					id={10}
				/>
				<Cell
					mon={mons[11].sprites.front_default}
					click={handleClick}
					id={11}
				/>
			</div>
		</>
	);
};

export default App;
