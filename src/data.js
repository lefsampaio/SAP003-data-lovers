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

  computeStats: (data) => {
    return data.reduce((prev, next) => prev + next);
  }
};
