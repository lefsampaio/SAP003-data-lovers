window.pokemon = {

  filterData: (data, condition, target) => {
    return data.filter(data =>
      data[target].includes(condition));
  },

  sortData: (data, sortBy, sortOrder) => {
    if (sortOrder === "a-z") {
      return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }
    else if (sortOrder === "z-a") {
      return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy])).reverse();
    }
  },

  candies: (data, condition) => {
    const candiesArray = [];
    data.forEach(elem => {
      if (elem.name === condition) {
        candiesArray.push(elem.candy_count);
        if (elem.next_evolution) {
          const nextName = elem.next_evolution[0].name;
          if (elem.next_evolution[0].name) {
            nextPokemon = data.forEach(element => {
              if (element.name === nextName) {
                candiesArray.push(element.candy_count);
              }
            });
          }
        }
      }
    });
    return candiesArray;
  },

  computeStats: (data) => {
    return data.reduce((prev, next) => {
      if (next !== undefined) {
        return prev + next;
      } return prev;
    });
  }
};
