const API_URL = 'https://pokeapi.co/api/v2/type/';

const searchButton = document.getElementById('search-button');
const pokemonList = document.getElementById('search-results');
const searchBar = document.getElementById('search-bar');
const form = document.querySelector('.search-form')

searchButton.addEventListener('click', getPokemonType)

async function getPokemonType(type='fire') {
    searchButton.disabled = true;
    let pokemon;
    const searchResults = await fetch(`${API_URL}${type}`)
        .then(res => res.json())
        .then(res => res.pokemon)
        .catch(e => console.log('oh no!'))
        .finally(res => pokemon = res)
        searchButton.disabled = false;
        return pokemon;
}

async function handleSearchResults() {
 if(pokemonList.childNode) pokemonList.childNodes.forEach(node => pokemonList.removeChild(node));
 console.log(searchBar.value)
 try {
    const searchResults = await getPokemonType(searchBar.value).then(console.log);
 } catch {
     console.log('hhhoho')
 }
 if (searchResults === 'No Results') {
     const noResults = document.createElement('p');
     noResults.textContent = 'Check your spelling and try again!'
     noResults.classList.add('no-results');
     searchForm.append(noResults)
     
 } 
 else {
    for(let poke of searchResults) {
        const li = document.createElement('li');
        li.textContent(poke.name);
        pokemonList.appendChild()
    }
 }

}
