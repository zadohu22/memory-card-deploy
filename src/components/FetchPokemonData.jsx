
import { Pokedex } from 'pokeapi-js-wrapper';
const pokedex = new Pokedex();

async function fetchPokemonData() {
		const interval = {
			offset: Math.floor(Math.random() * 500),
			limit: 12,
		};
		let request = await pokedex.getPokemonsList(interval);
		let listOfMons = request.results;

		const promises = await Promise.all(
			listOfMons.map((pokemons) => fetch(pokemons.url))
		);
		const pokemonArray = await Promise.all(
			promises.map((promise) => promise.json())
		);

        return pokemonArray;
        
		// pokemonArray.map((pokemon) =>
		// 	imageArray.push(pokemon.sprites.front_default)
		// );

	}

export default fetchPokemonData()