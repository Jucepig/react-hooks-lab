import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PokemonList = () => {
  const [ pokeData, setPokeData ] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setPokeData(res.data.results)
      })
      .catch(err => {console.log(err)})
  }, [])

  console.log(pokeData)


  return(
    <>
      {pokeData.map((pokemon, index) => {
        return(
          <Link key={index} to={`/pokemon/${pokemon.name}`}>
            <h3>{pokemon.name}</h3>
          </Link>
        )
      })}
    </>
  )
}

export default PokemonList