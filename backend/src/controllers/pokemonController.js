const pokemonService = require('../services/pokemonService');

exports.getPokemonData = async (req, res, next) => {
  try {
    const { name } = req.params;
    const pokemonData = await pokemonService.getPokemonData(name);
    res.json(pokemonData);
  } catch (error) {
    next(error);
  }
};
