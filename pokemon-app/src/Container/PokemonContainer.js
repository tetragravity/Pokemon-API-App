import React from 'react';
import PokemonCard from '../Component/PokemonCard'

const PokemonContainer = (props) => {
    let filteredPokemon;
    filteredPokemon = props.pokemons.filter(pokemon => {
         return pokemon.name.includes(props.pokemonFilter)
    })
    return(
        <div>
            {filteredPokemon.map( pokemon =>  < PokemonCard 
                    pokemon={pokemon}
                    key={pokemon.name}
                    onDbleClick={props.onDbleClick}
                    onSgleClick={props.onSgleClick} />
                
            )} 
        </div>
    )
}
export default PokemonContainer;