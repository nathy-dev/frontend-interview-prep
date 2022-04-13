import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Pokemonlist from './components/PokemonList';

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const App = () => {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(API_URL);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();

    const getPokemon = async () => {
        const result = await fetch(page)
        const data = await result.json();
        setNextPage(data.next)
        setPrevPage(data.previous)
        setPokemon(data.results.map(p => p.name));
    }

    useEffect(()=> {
        getPokemon();
    }, [page])

    const goNext = () => {
        setPage(nextPage)
    }

    const goPrev = () => {
        setPage(prevPage)
    }
    
    return (
        <div>
            <Pokemonlist pokemon={pokemon} />
            <Pagination goNext={goNext} goPrev={goPrev}/>
        </div>
    );
}

export default App;
