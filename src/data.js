window.pokemon = {

  filterType: (data, condition) => {
    const pokeTypes = data.filter(data =>
      data.type.includes(condition));
    return pokeTypes;
  },

  sortData: (data, condition) => {
    let sortPoke = "";
    if (condition === 'a-z') {
      sortPoke = data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (condition === 'z-a') {
      sortPoke = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
    return (sortPoke);
  },

  computeStats: (data) => {
    data.reduce((prev, next) => prev + next);
    return data;


  },

  filterEgg: (data, condition) => {
    const pokeEgg = data.filter(data =>
      data.egg.includes(condition));
    return pokeEgg;
  }
}