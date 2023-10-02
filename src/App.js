import React from 'react';
import { Route, Switch, Router, BrowserRouter, Routes } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonList/>} />
        <Route path="/:name" element={<PokemonDetails/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}