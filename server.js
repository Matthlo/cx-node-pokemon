const express = require("express");
const fs = require('fs');
const router = express.Router();
const pokedex = require('./pokedex.json');
const app = express();
const bodyParser = require("body-parser");
const arg = process.argv[2];



app.get('/pokemon', (req, res) => {
    res.json(pokedex)
})
app.get("/pokemon/:id", (req, res) => {
    const pokemon = pokedex.find(val => val.id === Number(req.params.id));
    return res.json(pokemon);
  });


app.post("/items", (req, res) => {
    pokedex.push({
        id:  pokedex.length + 1,
        name: req.body.name,
        type: req.body.type,
      base: req.body.base,

    });
    return res.json({ message: "Created with id"+pokedex.length });
  });

  app.delete('/items/:id', (req, res) => {
    
    const deletePokemon = pokedex.find(c => c.id == parseInt(req.params.id))
    const index = pokemons.indexOf(pokemon)
    pokemons.splice(index, 1)
    
    res.send(pokemon)
  })

  app.listen(3000, function() {
    console.log("Server is listening on http://localhost:"+ arg);
  });