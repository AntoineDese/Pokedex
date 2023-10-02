import { useState, useEffect } from "react";
import { PokemonTile } from "./PokemonTile";
import { PokemonDetails } from "./PokemonDetails";
import pokeball1 from  './pokeball1.png';
import pokeball2 from  './pokeball2.png';
import { hover } from "@testing-library/user-event/dist/hover";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);
  
  
  //console.log('poke', pokemons)

  function fetchPokemonData(pokemon){
    console.log('test');
  let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
    
    })
  }

  //console.log("details: ",PokemonDetails)
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")
    .then((response) => response.json())
    .then((data) => setPokemons(data.results))
    /*.then((pokemons) =>{
      pokemons.results.forEach(function(pokemon){
        fetchPokemonData(pokemon)
         //console.log(pokemon)
      })
    })*/
    
    }, []);
   
   


    //console.log ("pokemons", pokemons);
    let newPokemons = pokemons.map ((obj, index) => ({ ...obj, urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png` }));
    //console.log('new_array', newPokemons)
    //console.log("poke to",pokemons);
    function changeBackground(e) {
      e.target.style.backgroundImage = `url(${pokeball2})` ;
    }
    function changeBackBackground(e) {
      e.target.style.backgroundImage = `url(${pokeball1})` ;
    }
    const pokesDivStyle = {
      //backgroundColor: "#f2f2f2",
      backgroundImage:`url(${pokeball1})`,
      border: '24px solid white',
      backgroundSize: 'cover',
      backgroundRepeat : 'no-repeat',
      backgroundPosition: 'center',
      padding: '8px'
    };
    return (
      <div className={"main"}>
        {newPokemons.map((pokemon) => (
          <Link to={`/${pokemon.name}`}>
        <div
          name={pokemon.name}
          title={pokemon.name}
          key={pokemon.name}
          className={"pokes"}
          style={pokesDivStyle}
          onMouseOver={changeBackground}
          onMouseOut={changeBackBackground}
        >
        
        <PokemonTile
        name={pokemon.name}
        title={pokemon.name}
        key={pokemon.name}
      ></PokemonTile>
      
        </div>
        </Link>
        
      ))}
       
        
       
      </div>
      
    )
  }
    
  