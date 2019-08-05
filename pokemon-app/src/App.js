import React, {Component} from 'react';
import './App.css';
import PokemonContainer from './Container/PokemonContainer';
import SearchBar from './Component/SearchBar';
import Scouting from './Component/Scouting';

const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

// App with constructor for setting states
class App extends Component {
  constructor(){
    super()
    this.state = {
      team: [],
      allPokemon: [],
      scoutPokemon: null,
      searchText : ""
    }
  }

  //Fetch's Pokemon data after DOM is loaded
  componentDidMount(){
    fetch(ALL_POKEMON_URL)
    .then(response => response.json())
    .then(pokemonObj => this.setState({
      allPokemon: pokemonObj.results
    }))
  }

  //When a user single clicks a Pokemon card, the stats for that Pokemon is shown in a Div
  displayPokemonStat = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(pokemonObj => this.setState({
      scoutPokemon: pokemonObj
    }))
  }

  //When a user double clicks a Pokemon, the Pokemon is added to the team
  AddPokemonToTeam = (pokemon) => {
    if(!this.state.team.includes(pokemon)){
      if(this.state.team.length < 5 ){
        this.setState({team: [...this.state.team, pokemon]})
      }
      else{
        alert("Cant add more than 5 Pokemon to the Team!")
      }
    }
    else{
      alert("Cant add the same Pokemon to the Team!")
    }
  }

  //When a user double clicks a Pokemon card, the Pokemon is removed from the team
  removePokemonFromTeam = (pokemon) => {
    this.setState({
      team: this.state.team.filter(p => p !== pokemon)
    })
  }

  //When a user searches for a Pokemon, that Pokemon is shown (changes state)
  searchPokemon = (event) =>{
    this.setState({
      searchText: event.target.value
    })
  }


  render(){ 
    return(
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h4>Pokemon Team:</h4>
        < PokemonContainer
        pokemons={this.state.team}
        onDbleClick={this.removePokemonFromTeam}
        onSgleClick={this.displayPokemonStat} />
        < Scouting
        player ={this.state.scoutPokemon} />

        < SearchBar
        changeSearchPokemon = {this.searchPokemon} 
        />

        <h4>Wild Pokemon:</h4>
        < PokemonContainer
        pokemonFilter = {this.state.searchText}
        pokemons={this.state.allPokemon}
        onDbleClick={this.AddPokemonToTeam}
        onSgleClick={this.displayPokemonStat}  />        
      </div>
    )
  }
}
export default App;


