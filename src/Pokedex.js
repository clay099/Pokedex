import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ list, isWinner, totalExp }) => (
	<>
		<h1 className="Pokedex-title">Pokedex</h1>
		{list.map((p) => (
			<Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
		))}
		<h3 className="Pokedex-total">Total Experience: {totalExp}</h3>
		<h3 className="Pokedex-isWinner">{isWinner === true ? "THIS HAND WINS" : ""}</h3>
	</>
);

export default Pokedex;
