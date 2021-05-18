import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
  const [ pokemon, setPokemon ] = useState(null)
  const { name } = props.match.params

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      setPokemon(res.data)
    })
    .catch(err => console.log(err))
  }, [name])

  console.log(pokemon)

  return(
    <div>
      {pokemon ? (
        <>
          <h1>{name}</h1>
          <img alt={name} src={pokemon.sprites.front_default} />
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  )
}

export default Pokemon