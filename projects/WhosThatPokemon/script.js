var pokemonImage = document.getElementById("pokemonImage");
var pokemonInput = document.getElementById("pokemonInput");

var currentPokemon = null;

var sumPokemons = 1025;
var freePokemons = [];
for (var i = 1; i <= sumPokemons; i++) {
  freePokemons.push(i);
}

getRandomPokemon();

pokemonImage.addEventListener("click", function () {
  this.style.filter = "brightness(100%)";
  setTimeout(getRandomPokemon, 2000); // Also, removed the immediate invocation of getRandomPokemon()
});

pokemonInput.addEventListener("input", function () {
  if (pokemonInput.value.toLowerCase() === currentPokemon.name) {
    pokemonInput.value = "";
    freePokemons.splice(freePokemons.indexOf(currentPokemon.id), 1);
    getRandomPokemon();
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
      pokemonImage.src = data.sprites.other["official-artwork"].front_default;
      currentPokemon = data;
    });
}
