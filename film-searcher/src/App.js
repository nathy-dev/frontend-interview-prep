import React, { useEffect, useState } from 'react';

import './App.css'
import searchIcon from './search.svg'

import MovieCard from './components/MovieCard';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const App = () => {
    const [movies, setMovies] =  useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Superman')
    }, []);

    return (
       <div className='app'>
           <h1>Film Searcher</h1>
           
           <div className="search">
               <input 
                    type='text' 
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
               />
               <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
               />
            </div>

            {movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                <h2>No movies found</h2>
                </div>
            )}

       </div>
    );
}

export default App;