import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
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

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const pokemonImage = pokemonDetails?.sprites?.front_default;
  const pokemonNature = pokemonDetails?.types;

  useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((response) => response.json())
  .then((data) => setPokemonDetails(data));
  },[])

  console.log(pokemonDetails);
  return (
    <div className={"details"}>
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <div className={'typeDetails'}>
      <img src={pokemonImage} alt={name} className={"detailsImg"} />
      {pokemonNature?.map((nature, index) => {
            return (
        <div className={'types'}> 
        {(nature.type.name==='ground') && <img src={ground} alt={'ground'} className={'eachType'}  />}
            {(nature.type.name==='flying') && <img src={flying} alt={'flying'} className={'eachType'}  />}
            {(nature.type.name==='bug') && <img src={bug} alt={'bug'} className={'eachType'} />}
            {(nature.type.name==='grass') && <img src={grass} alt={'grass'} className={'eachType'} />}
            {(nature.type.name==='electric') && <img src={electric} alt={'electric'} className={'eachType'} />}
            {(nature.type.name==='poison') && <img src={poison} alt={'poison'} className={'eachType'} />}
            {(nature.type.name==='water') && <img src={water} alt={'water'} className={'eachType'} />}
            {(nature.type.name==='dark') && <img src={dark} alt={'dark'} className={'eachType'} />}
            {(nature.type.name==='dragon') && <img src={dragon} alt={'dragon'} className={'eachType'} />}
            {(nature.type.name==='normal') && <img src={normal} alt={'normal'} className={'eachType'} />}
            {(nature.type.name==='fairy') && <img src={fairy} alt={'fairy'} className={'eachType'} />}
            {(nature.type.name==='fighting') && <img src={fighting} alt={'fighting'} className={'eachType'} />}
            {(nature.type.name==='ghost') && <img src={ghost} alt={'ghost'} className={'eachType'} />}
            {(nature.type.name==='rock') && <img src={rock} alt={'rock'} className={'eachType'} />}
            {(nature.type.name==='psychic') && <img src={psychic} alt={'psychic'} className={'eachType'} />}
            {(nature.type.name==='ice') && <img src={ice} alt={'ice'} className={'eachType'} />}
            {(nature.type.name==='steel') && <img src={steel} alt={'steel'} className={'eachType'} />}
            {(nature.type.name==='fire') && <img src={fire} alt={'fire'} className={'eachType'} />}
        </div>
        )
      }
      )}
      </div>
    </div>
  );
}