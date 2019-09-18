window.onload = () => {
  showPokemon(getPokemons);
  showMenu(getPokemons);
  //showTypes(getPokemons)
};
const getPokemons = POKEMON.pokemon;

const pokemonsList = document.getElementById("pokemons-list");
const filterTypes = document.getElementById('types-menu');
const alphabeticOrder = document.getElementById("alpha-order");
const filterEggs = document.getElementById("select-egg");

showPokemon = (getPokemons) => {
  pokemonsList.innerHTML = `
${getPokemons.map(pokemon => `
  <li class="pokemon-item">
      <h3 class="pokemon-name">${pokemon.name}</h3>    
      <p>${pokemon.num}</p>
      <p>Ovo: ${pokemon.egg}</p>
      <img src="${pokemon.img}" class="pokemon-img" />   
      </li>

`).join(" ")}

    `}

filterTypes.addEventListener('change', () => {
  const selected = filterTypes.value;
  const pokeTypes = window.pokemon.filterType(getPokemons, selected);

  if (selected === "none-type") {
    showPokemon(getPokemons)
  } else {
    showPokemon(pokeTypes)
  }

})

alphabeticOrder.addEventListener('change', () => {
  let orderOrigin = getPokemons.slice();
  const selected = alphabeticOrder.value;
  const orderAtoZ = window.pokemon.sortData(getPokemons, selected);
 
  if (selected === "none-type") {
    showPokemon(orderOrigin)
  } else {
    showPokemon(orderAtoZ)
  }
})

filterEggs.addEventListener('change', () => {
  const selected = filterEggs.value;
  const Eggs = window.pokemon.filterEgg(getPokemons, selected);

  if (selected === "none-type") {
    showPokemon(getPokemons)
  } else {
    showPokemon(Eggs)
  }

})

showMenu = (getPokemons) =>{
  let pokeEggs = [];
  getPokemons.map(pokemon=> {
    if (!pokeEggs.includes(pokemon.egg)){
      pokeEggs.push(pokemon.egg);
    }else{
      return false;
    }
    
  });
filterEggs.innerHTML = "";
filterEggs.innerHTML = `<option value="none-type">OVOS </option>`;
filterEggs.innerHTML += pokeEggs.map(distancia=> `<option value="${distancia}">${distancia} </option>`)

}

/*showTypes = (getPokemons) =>{
  let pokeTypes = [];
  getPokemons.map(pokemon=> {
    if (!pokeTypes.includes(pokemon.type)){
      pokeTypes.push(pokemon.type);
    }else{
      return false;
    }
    
  });
filterTypes.innerHTML = "";
filterTypes.innerHTML = `<option value="none-type">OVOS </option>`;
filterTypes.innerHTML += pokeTypes.map(tipos=> `<option value="${tipos}">${tipos} </option>`)

}*/
