var pokemonName = document.getElementById("pokemonName");
var pokemonImage = document.getElementById("pokemonImage");

var sumPokemons = 1025;

getRandomPokemon();

pokemonImage.addEventListener("click", function () {
  this.style.filter = "brightness(100%)";
  setTimeout(getRandomPokemon, 2000); // Also, removed the immediate invocation of getRandomPokemon()
});

function getRandomPokemon() {
  fetch(
    "https://pokeapi.co/api/v2/pokemon/" +
      Math.floor(Math.random() * sumPokemons + 1)
  )
    .then((response) => response.json())
    .then((data) => {
      pokemonImage.style.filter = "brightness(0%)";
      pokemonName.innerHTML = data.name;
      pokemonImage.src = data.sprites.other["official-artwork"].front_default;
    });
}
