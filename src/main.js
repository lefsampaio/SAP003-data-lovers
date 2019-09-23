window.onload = () => {
  showPokemon(getPokemons);
  showMenuEggs(getPokemons);
};
const getPokemons = POKEMON.pokemon;

const pokemonsList = document.getElementById("pokemons-list");
const filterTypes = document.getElementById("types-menu");
const alphabeticOrder = document.getElementById("alpha-order");
const filterEggs = document.getElementById("eggs-menu");
const filterWeakness = document.getElementById("weakness-menu");

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

    `;};

filterTypes.addEventListener("change", () => {
  const selected = filterTypes.value;
  const pokeTypes = pokemon.filterData(getPokemons, selected, "type");

  if (selected === "none-type") {
    showPokemon(getPokemons);
  } else {
    showPokemon(pokeTypes);
  }

});

alphabeticOrder.addEventListener("change", () => {
  const selected = alphabeticOrder.value;
  const orderAtoZ = pokemon.sortData(getPokemons, "name", selected);
  if (selected === "none-type") {
    showPokemon(getPokemons);
  } else {
    showPokemon(orderAtoZ);
  }
});

filterEggs.addEventListener("change", () => {
  const selected = filterEggs.value;
  const Eggs = pokemon.filterData(getPokemons, selected, "egg");

  if (selected === "none-type") {
    showPokemon(getPokemons);
  } else {
    showPokemon(Eggs);
  }

});

filterWeakness.addEventListener("change", () => {
  const selected = filterWeakness.value;
  const Weakness = pokemon.filterData(getPokemons, selected, "weaknesses");

  if (selected === "none-type") {
    showPokemon(getPokemons);
  } else {
    showPokemon(Weakness);
  }

});

showMenuEggs = (getPokemons) => {
  let pokeEggs = [];
  getPokemons.forEach(pokemon => {
    if (!pokeEggs.includes(pokemon.egg)) {
      pokeEggs.push(pokemon.egg);
    }
  });
  filterEggs.innerHTML = "";
  filterEggs.innerHTML = "<option value=\"none-type\">Filtrar por ovos: </option>";
  filterEggs.innerHTML += pokeEggs.map(distancia => `<option value="${distancia}">${distancia} </option>`);

};

// candy.addEventListener('click', () => {
//   const pokeCandy = window.pokemon.computeStats(getPokemons);
//   console.log(pokeCandy)
// })
