import React from "react";
import pokemon from "./pokemonList";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = () => (
	<>
		<h1 className="Pokedex-title">Pokedex</h1>
		{pokemon.map((p) => (
			<Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
		))}
	</>
);

export default Pokedex;
