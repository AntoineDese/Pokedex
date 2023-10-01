import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import pokeball from  './pokeball.png';
import bug from './bug.png';
import dark from './dark.png';
import dragon from './dragon.png';
import electric from './electric.png';
import fairy from './fairy.png';
import fighting from './fighting.png';
import fire from './fire.png';
import flying from './flying.png';
import ghost from './ghost.png';
import grass from './grass.png';
import ground from './ground.png';
import ice from './ice.png';
import normal from './normal.png';
import poison from './poison.png';
import psychic from './psychic.png';
import rock from './rock.png';
import steel from './steel.png';
import water from './water.png';



export function PokemonTile(props) {
    const [seen, setSeen] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const pokemonImage = pokemonDetails?.sprites?.front_default;
    const pokemonNature = pokemonDetails?.types;
    const pokemonType = pokemonNature;
    const pokemonName = pokemonDetails?.name;
   
    
    const handleVisibilityChange = (inView) => {
      if (inView) {
        console.log(`${props.name} is visible ${inView}`);
        setSeen(true);
      }
    };
  





    useEffect(() => {
      if (seen) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
          .then((response) => response.json())
          .then((data) => setPokemonDetails(data));
      }
    }, [seen]);
    console.log(pokemonType)
    return (
        <div className="new">
          <div className={"logoBackground"} >
            {pokemonImage && <img src={pokemonImage} alt={pokemonName} className={"logo"} style={{paddingBottom:'40px'}}/>}
            </div>
            <div className={"pokeName"} >{pokemonName?.charAt(0).toUpperCase() + pokemonName?.slice(1)}</div>
            <div className={"pokeTypesFirst"} > 
            {pokemonNature?.map((nature, index) => {
            return (
            <>
            {(nature.type.name==='ground') && <img src={ground} alt={'ground'} className={"pokeType"} />}
            {(nature.type.name==='flying') && <img src={flying} alt={'flying'} className={"pokeType"} />}
            {(nature.type.name==='bug') && <img src={bug} alt={'bug'} className={"pokeType"} />}
            {(nature.type.name==='grass') && <img src={grass} alt={'grass'} className={"pokeType"} />}
            {(nature.type.name==='electric') && <img src={electric} alt={'electric'} className={"pokeType"} />}
            {(nature.type.name==='poison') && <img src={poison} alt={'poison'} className={"pokeType"} />}
            {(nature.type.name==='water') && <img src={water} alt={'water'} className={"pokeType"} />}
            {(nature.type.name==='dark') && <img src={dark} alt={'dark'} className={"pokeType"} />}
            {(nature.type.name==='dragon') && <img src={dragon} alt={'dragon'} className={"pokeType"} />}
            {(nature.type.name==='normal') && <img src={normal} alt={'normal'} className={"pokeType"} />}
            {(nature.type.name==='fairy') && <img src={fairy} alt={'fairy'} className={"pokeType"} />}
            {(nature.type.name==='fighting') && <img src={fighting} alt={'fighting'} className={"pokeType"} />}
            {(nature.type.name==='ghost') && <img src={ghost} alt={'ghost'} className={"pokeType"} />}
            {(nature.type.name==='rock') && <img src={rock} alt={'rock'} className={"pokeType"} />}
            {(nature.type.name==='psychic') && <img src={psychic} alt={'psychic'} className={"pokeType"} />}
            {(nature.type.name==='ice') && <img src={ice} alt={'ice'} className={"pokeType"} />}
            {(nature.type.name==='steel') && <img src={steel} alt={'steel'} className={"pokeType"} />}
            {(nature.type.name==='fire') && <img src={fire} alt={'fire'} className={"pokeType"} />}
            </>
        );
      })}
      </div>
        </div>
    )
  }

/*
            {(nature.type.name==='ground') && <span className = {"pokeType"} style={{backgroundColor:'chocolate', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='flying') && <span className = {"pokeType"} style={{backgroundColor:'lightgrey', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='bug') && <span className = {"pokeType"} style={{backgroundColor:'greenyellow', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='grass') && <span className = {"pokeType"} style={{backgroundColor:'forestgreen', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='electric') && <span className = {"pokeType"} style={{backgroundColor:'gold', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='poison') && <span className = {"pokeType"} style={{backgroundColor:'darkviolet', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='water') && <span className = {"pokeType"} style={{backgroundColor:'aqua', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='dark') && <span className = {"pokeType"} style={{backgroundColor:'indigo', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='dragon') && <span className = {"pokeType"} style={{backgroundColor:'steelblue', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='normal') && <span className = {"pokeType"} style={{backgroundColor:'darksalmon', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='fairy') && <span className = {"pokeType"} style={{backgroundColor:'pink', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='fighting') && <span className = {"pokeType"} style={{backgroundColor:'crimson', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='ghost') && <span className = {"pokeType"} style={{backgroundColor:'blueviolet', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='rock') && <span className = {"pokeType"} style={{backgroundColor:'slategray', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='psychic') && <span className = {"pokeType"} style={{backgroundColor:'plum', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='ice') && <span className = {"pokeType"} style={{backgroundColor:'paleturquoise', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='steel') && <span className = {"pokeType"} style={{backgroundColor:'silver', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            {(nature.type.name==='fire') && <span className = {"pokeType"} style={{backgroundColor:'orangered', border: '2px solid white', borderRadius: '10px', margin: '3px'}}> {nature.type.name.charAt(0).toUpperCase() + nature.type.name.slice(1)}</span>}
            */