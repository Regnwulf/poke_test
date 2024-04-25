import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/api/pokemon/${pokemonName.toLowerCase()}`);

      if (!response.ok) {
        throw new Error('Pokemon not found.');
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      setError(error.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon Information</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Pokemon Name"
          value={pokemonName}
          onChange={handleInputChange}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {pokemonData && (
        <div className="PokemonInfo">
          <h2 className="PokemonName">{pokemonData.name}</h2>
          <h3>Abilities:</h3>
          <ul className="Abilities">
            {pokemonData.abilities.map((ability, index) => (
              <li key={index} className="Ability">{ability}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
