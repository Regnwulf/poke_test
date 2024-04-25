const pokemonController = require('../../src/controllers/pokemonController')
const pokemonService = require('../../src/services/pokemonService')

jest.mock('../../src/services/pokemonService')

describe('getPokemonData', () => {
  it('should call pokemonService and return pokemon data', async () => {
    const mockReq = { params: { name: 'pikachu' } }
    const mockRes = { json: jest.fn() }
    const mockNext = jest.fn()

    const mockPokemonData = {
      name: 'pikachu',
      abilities: ['ability1', 'ability2']
    }

    pokemonService.getPokemonData.mockResolvedValue(mockPokemonData)

    await pokemonController.getPokemonData(mockReq, mockRes, mockNext)

    expect(pokemonService.getPokemonData).toHaveBeenCalledWith('pikachu')
    expect(mockRes.json).toHaveBeenCalledWith(mockPokemonData)
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should call next with error if pokemonService throws an error', async () => {
    const mockReq = { params: { name: 'pikachu' } }
    const mockRes = { json: jest.fn() }
    const mockNext = jest.fn()

    const mockError = new Error('Pokemon not found.')

    pokemonService.getPokemonData.mockRejectedValue(mockError)

    await pokemonController.getPokemonData(mockReq, mockRes, mockNext)

    expect(pokemonService.getPokemonData).toHaveBeenCalledWith('pikachu')
    expect(mockRes.json).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(mockError)
  })
})
