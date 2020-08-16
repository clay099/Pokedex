import React from "react";
import Pokedex from "./Pokedex";
import pokemonList from "./pokemonList";

const Pokegame = () => {
	let group1 = [];
	let group2 = [];
	let sort;
	let group1Total = 0;
	let group2Total = 0;

	while (pokemonList.length > 0) {
		let idx = Math.floor(Math.random() * pokemonList.length);
		let p = pokemonList.splice(idx, 1);
		sort = sort === group1 ? group2 : group1;
		sort === group1
			? (group1Total += p[0].base_experience)
			: (group2Total += p[0].base_experience);
		sort.push(p[0]);
	}
	let group1Winner = false;
	let group2Winner = false;
	group1Total > group2Total ? (group1Winner = true) : (group2Winner = true);

	return (
		<>
			<Pokedex list={group1} totalExp={group1Total} isWinner={group1Winner} />
			<Pokedex list={group2} totalExp={group2Total} isWinner={group2Winner} />
		</>
	);
};

export default Pokegame;
