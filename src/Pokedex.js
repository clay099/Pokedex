import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ list, isWinner, totalExp }) => {
	let BGcolor = { true: "lightGreen", false: "white" };
	return (
		<div style={{ backgroundColor: BGcolor[isWinner] }} className="Pokedex">
			<h1 className="Pokedex-title">Pokedex Group</h1>
			{list.map((p) => (
				<Pokecard
					key={p.id}
					id={p.id}
					name={p.name}
					type={p.type}
					base_experience={p.base_experience}
				/>
			))}
			<h3 className="Pokedex-total">Total Experience: {totalExp}</h3>
			<h3 className="Pokedex-isWinner">{isWinner === true ? "THIS HAND WINS" : ""}</h3>
		</div>
	);
};

export default Pokedex;
