window.onload = () => {
    showPokemon(getPokemons());
};

getPokemons = () => {
    return POKEMON["pokemon"];
}

compareName = (a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}//return pokemon.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)

//pokemon.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)


sortArrayByName = (arrayPrincipal) => {
    return arrayPrincipal.slice(0).sort(compareName);
}
//DOM
const sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', (event) => {
    if (event.target.value === 'a-z') {
        const ordenaredPokemon = sortArrayByName(getPokemons());
        showPokemon(ordenaredPokemon);

    } else if (event.target.value === 'z-a') {
        const orderReverse = sortArrayByName(getPokemons()).reverse();
        showPokemon(orderReverse);
    }
    else if (event.target.value === 'none-order') {
        const orderId = showPokemon(getPokemons());
        showPokemon(orderId);
    }
})

const orderTypes = document.getElementById('types-menu');

orderTypes.addEventListener('change', () => {
    const pokeTypes = getPokemons().filter((pokemon) => {
        const typeTrue = pokemon.type.find((element) => {
            return (event.target.value === element)
        });
        if (typeTrue) {
            return pokemon
        } else if (event.target.value === 'none-type') {
            const orderId = showPokemon(getPokemons());
            showPokemon(orderId);
        }
    });

    showPokemon(pokeTypes);
})

showPokemon = (array) => {
    const pokemonsList = document.getElementById("pokemons-list");
    pokemonsList.innerHTML = `
    ${array.map((pokemon) => `
    <li class="pokemon-item">
        <img src="${pokemon["img"]}" class="pokemon-img" />        
        <h3 class="pokemon-name">${pokemon["name"]}</h3>    
        <p>${pokemon["num"]}</p>
        <p>Ovo: ${pokemon["egg"]}</p>
        </li>

  `).join(" ")}
      `
}

