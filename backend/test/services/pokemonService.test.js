const axios = require('axios');
const pokemonService = require('../../src/services/pokemonService');

jest.mock('axios');

describe('getPokemonData', () => {
  it('should return pokemon data', async () => {
    const mockResponse = {
      data: {
        name: 'pikachu',
        abilities: [
          { ability: { name: 'ability1' } },
          { ability: { name: 'ability2' } }
        ]
      }
    };

    axios.get.mockResolvedValue(mockResponse);

    const pokemonData = await pokemonService.getPokemonData('pikachu');

    expect(pokemonData).toEqual({
      name: 'pikachu',
      abilities: ['ability1', 'ability2']
    });
  });
});
