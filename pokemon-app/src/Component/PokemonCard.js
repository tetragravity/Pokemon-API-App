import React from 'react';

const PokemonCard = (props) => {
    return(
        <div 
        onDoubleClick = { () =>{ props.onDbleClick(props.pokemon) }  } 
        onClick = { () => { props.onSgleClick(props.pokemon.url) }   }
        className = "pokemon card"  >
            {props.pokemon.name}
            
            
        </div>
    )
}
export default PokemonCard;