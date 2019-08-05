import React from 'react';

const Scouting = (props) => {
    return(
        <div className="card details">
            {
                props.player ? ( 
                <div>
                    <div className="row"> {props.player.species.name.charAt(0).toUpperCase() + props.player.species.name.slice(1)}  </div>
                    <div className="row">
                    <div> <img alt="" src={props.player.sprites.front_default} /></div>
                    {
                        props.player.stats.map( (obj) => {
                           return <div className="block" key={obj.stat.name} >{obj.stat.name.charAt(0).toUpperCase() + obj.stat.name.slice(1) + " : " + obj.base_stat}</div>
                        })
                    }
                    </div>
                </div>
                ) : (
                    <div>
                    <div className="row"> Click Pokemon to View Stats</div>
                    <div className="row">
                    <div> <img alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png" /></div>
                    <div className="block"> Hp: 270 </div> 
                    <div className="block"> Speed: 270</div>
                    <div className="block"> Attack: 270 </div>
                    <div className="block"> Defense: 270 </div>
                    <div className="block"> Sp-Attack: 270 </div>
                    <div className="block"> Sp-Defense: 270 </div>
                    </div>
                </div>
                )
            }
        </div>
    )

}
export default Scouting;