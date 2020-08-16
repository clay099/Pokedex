import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
	let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	return (
		<div className="Pokecard">
			<h3 className="Pokecard-Name">{name}</h3>
			<img className="Pokecard-img" src={img} alt="" />
			<ul>
				<li>Type: {type}</li>
				<li>Exp: {base_experience}</li>
			</ul>
		</div>
	);
};

export default Pokecard;
