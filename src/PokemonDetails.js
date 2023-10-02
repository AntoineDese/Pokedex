import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((response) => response.json())
  .then((data) => setPokemonDetails(data));
  },[])

  console.log(pokemonDetails);
  return (
    <div>
      <h2>{name}</h2>
      <br></br>
      <h2>{pokemonDetails.base_experience}</h2>
      {/* Wyświetlanie innych danych o pokemonie */}
    </div>
  );
}