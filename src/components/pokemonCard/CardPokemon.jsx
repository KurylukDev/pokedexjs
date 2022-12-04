import React from 'react'
import { Link } from 'react-router-dom'
import { primerMayuscula } from '../../helper/helper.js'
import { background } from "../../helper/BackgroundByType.js";

import styles from "./styles.module.css";

export const CardPokemon = ({pokemon}) => {

	const backgroundSelected = background[pokemon.types[0].type.name];

  return (
		<Link to={`/pokemon/${pokemon.id}`} className={styles.pokeCard}>
			<div  className={styles.top} style={{ borderColor: backgroundSelected }}>
				<span  className='pokemon-id'>N° {pokemon.id}</span>
				<img
					src={pokemon.sprites.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className={styles.bottom} style={{ background: backgroundSelected }}>
				<h2 className={styles.h3}>{primerMayuscula(pokemon.name)}</h2>
				<div className={styles.cardType}>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name} style={ {borderColor:backgroundSelected}}>
							{type.type.name}
						</span>
					))}
					</div>
			</div>
		</Link>
  )
}
