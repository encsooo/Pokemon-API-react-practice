import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Spinner from './Spinner.gif'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const URI = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await fetch(URI);
            const results = await data.json();
            setPokemon(results);
            setLoading(false);
        }
        fetchPokemon();
    }, []);

    //console.log(pokemon.results)

    if (loading) return (
        <div>
            <img src={Spinner} alt={Spinner} />
            <p className="loading-text">The Pokimon are coming</p>
        </div>
    )
            

     const PokemonList = pokemon.results.map((item, index) => (
          <Link to={{
             pathname: `/PokeCard`,
             state: {item, index},
          }}>
              <div className="card">
                <h4 className="poke-name" key={item.index}>{item.name}</h4>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`} alt={item.name} />
              </div>
          </Link>
      ))

    return (
        <div className='main-page'>
            <div className='poki-container'>
                {PokemonList}
            </div>
            <div className='btn-container'>
                <button>Previous</button>
                <button>Next</button>
            
            </div>
        </div>
    )
}

export default Pokemon;
