const express = require('express')
const router = express.Router()
const pokemonController = require('./controllers/pokemonController')

router.get('/pokemon/:name', pokemonController.getPokemonData)

module.exports = router
