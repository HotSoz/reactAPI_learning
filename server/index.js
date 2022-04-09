const express = require('express')
const app = express()
const port = 3000

// access path module
const path = require('path')

// find the directory you want to serve, do not use /static or you'll have to use localhost:3000/static
app.use('/', express.static(path.join(__dirname, '..', 'public')))

app.put('https://pokeapi.co/api/v2/pokemon', (req, res) => {
  const pokemon_name = pokemon.find({name: req.body.referer})
  res(pokemon_name);
  res.status(404).send(err);
})

app.listen(port, () => {
  console.log(`Sever listening on ${port}`)
})