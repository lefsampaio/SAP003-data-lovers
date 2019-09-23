window.onload = () => {
  showPokemons(getPokemons);
  showMenuEggs(getPokemons);
  showMenuTypes(getPokemons);
  showMenuWeaks(getPokemons);
};
const getPokemons = POKEMON.pokemon;

const pokemonsList = document.getElementById("pokemons-list");
const filterTypes = document.getElementById("types-menu");
const alphabeticOrder = document.getElementById("alpha-order");
const filterEggs = document.getElementById("eggs-menu");
const filterWeakness = document.getElementById("weakness-menu");

showPokemons = (getPokemons) => {
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
    showPokemons(getPokemons);
  } else {
    showPokemons(pokeTypes);
  }

});

alphabeticOrder.addEventListener("change", () => {
  const selected = alphabeticOrder.value;
  const orderAtoZ = pokemon.sortData(getPokemons, "name", selected);
  if (selected === "none-type") {
    showPokemons(getPokemons);
  } else {
    showPokemons(orderAtoZ);
  }
});

filterEggs.addEventListener("change", () => {
  const selected = filterEggs.value;
  const Eggs = pokemon.filterData(getPokemons, selected, "egg");

  if (selected === "none-type") {
    showPokemons(getPokemons);
  } else {
    showPokemons(Eggs);
  }

});

filterWeakness.addEventListener("change", () => {
  const selected = filterWeakness.value;
  const Weakness = pokemon.filterData(getPokemons, selected, "weaknesses");

  if (selected === "none-type") {
    showPokemons(getPokemons);
  } else {
    showPokemons(Weakness);
  }

});

showMenuEggs = (getPokemons) => {
  let pokeEggs= [...new Set(getPokemons.map(pokemon => pokemon.egg).flat())].sort();
  filterEggs.innerHTML = "";
  filterEggs.innerHTML = "<option value=\"none-type\">Filtrar por ovos: </option>";
  filterEggs.innerHTML += pokeEggs.map(distancia => `<option value="${distancia}">${distancia} </option>`);

};

showMenuTypes = (getPokemons) => {
  let poketypes= [...new Set(getPokemons.map(pokemon => pokemon.type).flat())].sort();
  filterTypes.innerHTML = "";
  filterTypes.innerHTML = "<option value=\"none-type\">Filtrar por tipo: </option>";
  filterTypes.innerHTML += poketypes.map(types => `<option value="${types}">${types} </option>`);

};

showMenuWeaks = (getPokemons) =>{
  let pokeWeakness= [...new Set(getPokemons.map(pokemon => pokemon.weaknesses).flat())].sort();
  filterWeakness.innerHTML = "";
  filterWeakness.innerHTML = "<option value=\"none-type\">Filtrar por fraqueza: </option>";
  filterWeakness.innerHTML += pokeWeakness.map(weaknesses => `<option value="${weaknesses}">${weaknesses} </option>`);
};

// candy.addEventListener('click', () => {
//   const pokeCandy = window.pokemon.computeStats(getPokemons);
//   console.log(pokeCandy)
// })
