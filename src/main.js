window.onload = () => {
  showPokemon(getPokemons);
};
const getPokemons = POKEMON.pokemon;

const pokemonsList = document.getElementById("pokemons-list");
const filterTypes = document.getElementById('types-menu');
const alphabeticOrder = document.getElementById("alpha-order");


showPokemon = (getPokemons) => {
  pokemonsList.innerHTML = `
${getPokemons.map(pokemon => `
  <li class="pokemon-item">
      <img src="${pokemon.img}" class="pokemon-img" />        
      <h3 class="pokemon-name">${pokemon.name}</h3>    
      <p>${pokemon.num}</p>
      <p>Ovo: ${pokemon.egg}</p>
      </li>

`).join(" ")}

    `}

filterTypes.addEventListener('change', () => {
  const selected = filterTypes.value;
  const pokeTypes = window.pokemon.filterData(getPokemons, selected);
  showPokemon(pokeTypes)

})


alphabeticOrder.addEventListener('change', () => {
  const selected = alphabeticOrder.value;
  const orderAtoZ = window.pokemon.sortData(getPokemons, selected);
  showPokemon(orderAtoZ);
})


