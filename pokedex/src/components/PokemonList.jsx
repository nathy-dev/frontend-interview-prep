import React from 'react';

const Pokemonlist = ({ pokemon }) => {
    return (
        <ul>
            {pokemon.map(p => (
                <li key={p}>{p}</li>
            ))}
        </ul>
    );
}

export default Pokemonlist;
