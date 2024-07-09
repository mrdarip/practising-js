var pokemonImage = document.getElementById("pokemonImage");
var pokemonInput = document.getElementById("pokemonInput");
var pokemonName = document.getElementById("pokemonName");
var numPokemonsLeft = document.getElementById("left");
var foundPokemons = document.getElementById("found");

var currentPokemon = null;

var sumPokemons = 1025;
var freePokemons = [];
for (var i = 1; i <= sumPokemons; i++) {
  freePokemons.push(i);
}

getRandomPokemon();
updateNumPokemonsLeft();

pokemonImage.addEventListener("click", function () {
  this.style.filter = "brightness(100%)";
  pokemonName.innerText = currentPokemon.name;
  setTimeout(getRandomPokemon, 2000); // Also, removed the immediate invocation of getRandomPokemon()
});

pokemonInput.addEventListener("input", function () {
  if (pokemonInput.value.toLowerCase() === currentPokemon.name) {
    addFoundPokemon(currentPokemon);
    freePokemons.splice(freePokemons.indexOf(currentPokemon.id), 1);
    getRandomPokemon();
    updateNumPokemonsLeft();
  }
});

function getRandomPokemon() {
  fetch(
    "https://pokeapi.co/api/v2/pokemon/" +
      freePokemons[Math.floor(Math.random() * freePokemons.length)]
  )
    .then((response) => response.json())
    .then((data) => {
      pokemonImage.style.filter = "brightness(0%)";

      pokemonName.innerText = "";
      pokemonInput.value = "";

      pokemonImage.src = data.sprites.other["official-artwork"].front_default;
      currentPokemon = data;
    });
}

function updateNumPokemonsLeft() {
  numPokemonsLeft.innerText = freePokemons.length;
}

function addFoundPokemon(pokemon) {
  var foundPokemon = document.createElement("div");
  foundPokemon.innerHTML = `
    <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
  `;
  foundPokemons.appendChild(foundPokemon);
}
