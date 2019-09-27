
const pokem = POKEMON.pokemon;
const printar = document.getElementById("pokeme");
const weaknessesType = document.getElementById("weaknesses-menu");
const txtBuscar = document.getElementById("txtBuscar");

pokemongo = (pokem) => {
  printar.innerHTML = `${pokem.map(pokemon =>
    `
  <li class="pokemon-item">
  <img src= "${pokemon.img}"/>
   <h3> ${pokemon.name} </h3>
   <h2> ${pokemon.num} </h2>
   <h2> ${pokemon.egg} </h2>
   </li>
  `
  ).join("  ")}`;
};

pokemongo(pokem);
weaknessesType.addEventListener("change", () => {
  const select = weaknessesType.value;
  //console.log(select)
  const frailty = pokem.filter(weak => weak.weaknesses.includes(select));
  //console.log(frailty);

  if (select === "none-weaknesses") {
    pokemongo(pokem);
  }
  else {
    pokemongo(frailty);
  }
});

txtBuscar.addEventListener("keypress", () => {
  const txtFilter = txtBuscar.value;
  const filterSearch = pokem.filter(pok => pok.name.includes(txtFilter));
  pokemongo(filterSearch);
});

pokemongo1 = (pokem) => {
// let listWeaknesses = [... new Set(pokem.map(weak => weak.weaknesses.flat()))].sort();
  let listWeaknesses = pokem.map(weak => weak.weaknesses);
  let weaknessesSelect = [... new Set(listWeaknesses.flat())].sort();
  console.log(weaknessesSelect);
  weaknessesType.innerHTML = "";
  weaknessesType.innerHTML = "<option value=\"none-weaknesses\">Filtrar por fraqueza</option>";
  weaknessesType.innerHTML += weaknessesSelect.map(weakness => `<option value="${weakness}">${weakness} </option>`);
};

pokemongo1(pokem);
