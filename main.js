  const pokem = POKEMON.pokemon;
  const printar = document.getElementById("pokeme");
  const weaknessesType = document.getElementById('weaknesses-menu');
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
).join("  ")}`
}

pokemongo(pokem);
    weaknessesType.addEventListener("change", () => {
    const select = weaknessesType.value
    //console.log(select)
    const frailty = pokem.filter(weak => weak.weaknesses.includes(select));
    //console.log(frailty);

    if (select === "none-weaknesses") {
       pokemongo(pokem)
     }
    else {
       pokemongo(frailty);
       }
  })

txtBuscar.addEventListener("keypress", () => {
const txtFilter = txtBuscar.value
const filterSearch = pokem.filter(pok => pok.name.includes(txtFilter));
pokemongo(filterSearch);
})


// if (txtFilter === "none-busca") {
//   pokemongo(pokem)
// }
// else{
//   pokemongo(filterSearch);
// }


//console.log(buttonFilter);



/*pokem.find(function(element){
return element.name

})


pokemongo(pokem);
buttonType.addEventListener("onkeypress", () => {
const button = buttonType.value
const buttonFilter = pokem.filter(buttonpokem => buttonpokem.pokemon.includes(button));
  if (buttonFilter === "none-button") {
    pokemongo(pokem)
} else {
    pokemongo(buttonFilter);
}
})*/
