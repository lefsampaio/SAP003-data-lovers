window.pokemon = {

  filterType: (data, condition) => {
    return data.filter(data =>
      data.type.includes(condition));

  },

  sortData: (data, condition) => {
    let sortPoke = "";
  // let arrayOriginal = [];
    if (condition === 'a-z') {
      sortPoke = data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (condition === 'z-a') {
      sortPoke = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }//else{
     // return arrayOriginal.slice().sort((a, b) => a.name.localeCompare(b.name))
   // }
      //sortPoke = data.slice().sort((a, b) => a.name.localeCompare(b.name));
   
    return (sortPoke);
  },
 /*sortArrayByName:(arrayOriginal)=> {
    return arrayOriginal.slice().sort(sortData(data, condition));
  },*/
  computeStats: (data) => {
    data.reduce((prev, next) => prev + next);
    return data;


  },

  filterEgg: (data, condition) => {
    return data.filter(data =>
      data.egg.includes(condition));
      
  }
}