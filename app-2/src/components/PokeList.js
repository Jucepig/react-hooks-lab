import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'

const PokeList = () => {
  const [ pokeData, setPokeData ] = useState([])
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res =>{
        setPokeData(res.data.results)
      })
  }, [])

  return(
    <div>
      {pokeData.map((pokemon, index) =>{
        return(
          <Pokemon pokemon={pokemon} key={index} />
        )
      })}
    </div>
  )
}

export default PokeList