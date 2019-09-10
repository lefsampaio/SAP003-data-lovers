
window.pokemon = getPokemons;

getPokemons = () => {
    return POKEMON["pokemon"];
}
compareName = (a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

sortArrayByName = (arrayPrincipal) => {
    return arrayPrincipal.slice(0).sort(compareName);
}



//sortData(data, sortBy, sortOrder): //esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

//computeStats(data): 