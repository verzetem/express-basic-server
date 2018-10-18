const express = require('express')
const app = express()
let port = 3000

// Data
const characters = require('./data.json')

// Basic GET route that responds with emoji or something
  // Lets us know the server is working
app.get('/', (req, res) => {
  res.send('😈😈😈😈😈')
})

// GET all route
  // Send back all characters, with a root key of 'characters'
app.get('/characters', (req, res) => {
  res.json({ characters: characters })
})

// GET one route
  // Sends back a single character from the data
  // Use route parameters
  // Has a root key of 'character'
app.get('/characters/:id', (req, res) => {
  // Grab the id of the character we want from the request URL parameters
  const id = req.params.id
  
  // Use that id to find the right character in our data

  // FOR loop approach
  // for (i = 0; i < characters.length; i++) {
  //   if (characters[i].id == id) {
  //     res.json({character: characters[i]})
  //   }
  // }

  // FILTER approach
  const character = characters.filter(character => {
    return character.id == id
  })[0]

  // Respond with the correct character
  res.json({ character: character })
})

// Clever but fragile approach accessing the characters array by index
// app.get('/characters/:id', (req, res, next) => {
//   res.json(characters[req.params.id - 1])
// })

app.listen(port, () => console.log('Server running on port 3000'))