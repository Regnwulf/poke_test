const axios = require('axios');

exports.getPokemonData = async (name) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const pokemonData = {
    name: response.data.name,
    abilities: response.data.abilities.map(ability => ability.ability.name).sort()
  };
  return pokemonData;
};
