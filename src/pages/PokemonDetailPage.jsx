import React from 'react'
import { Loader } from '../components/Loader'
import { PokemonDetail } from '../components/PokemonDetail/PokemonDetail'

export const PokemonDetailPage = () => {

	if(!PokemonDetail){
		return(
			
			<Loader></Loader>
			)
			
		}else{
		return (
		  <PokemonDetail />
		)
	}
}

