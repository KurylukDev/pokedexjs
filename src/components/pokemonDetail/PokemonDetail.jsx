import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader'
import { PokemonContext } from '../../context/PokemonContext';
import { primerMayuscula } from '../../helper/helper';
import { BaseStats } from "./components/BaseStats/BaseStats";
import { Header } from "./components/Header/Header";
import { Stats } from "./components/Stats/Stats";
import { Title } from "./components/Title/Title";

import styles from './styles.module.css'

export const PokemonDetail = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);


	return (
		<main className='container main-pokemon'>
			{loading ? (
				<Loader />
			) : (
				<div className={styles.bg}>
				<Header pokemon={pokemon} />
				<div className={styles.info}>
				  <img
					src={
					  pokemon.sprites.other.dream_world.front_default ||
					  pokemon.sprites.front_default
					}
					alt={pokemon.name}
				  />
				  <div>
					<h2 className={styles.name}>{pokemon.name}</h2>
				  </div>
				  <Title content="About" />
				  <Stats pokemon={pokemon} />
				  <Title content="Base Stats"/>
				  <BaseStats pokemon={pokemon}/>
				</div>
			  </div>
			)}
		</main>
	);
};