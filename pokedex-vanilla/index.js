const API_URL = 'https://pokeapi.co/api/v2/type/';

const searchButton = document.getElementById('search-button');
const pokemonList = document.getElementById('search-results');
const searchBar = document.getElementById('search-bar');
const form = document.querySelector('.search-form');
const container = document.querySelector('.wrapper');

searchButton.addEventListener('click', handleSearchResults)

async function getPokemonType(search) {
   try {
    searchButton.disabled = true;
    const url = (API_URL + search).toString();
    const searchResults = await fetch(url);
    const jsonData = await searchResults.json();
    searchButton.disabled = false;
    return jsonData.pokemon;
   } catch {
       searchButton.disabled = false;
       return 'No results'
   }
}

async function handleSearchResults() {
    if(document.querySelector('ul')) document.querySelector('ul').remove()
    if(document.querySelector('p')) document.querySelector('p').remove()
    const type = searchBar.value;
    const searchResults = await getPokemonType(type)
    console.log(searchResults)
 if (searchResults === 'No results') {

     const noResults = document.createElement('p');
     noResults.textContent = 'Check your spelling and try again!'
     noResults.classList.add('no-results');
     container.appendChild(noResults)
     
 } 
 else {
     const unOrderedList = document.createElement('ul');
    for(let poke of searchResults) {
        const listItem = document.createElement('li');
        listItem.textContent = poke.pokemon.name;
        listItem.classList.add('.list-item');
        unOrderedList.appendChild(listItem)
    }
    container.appendChild(unOrderedList)

 }

}
