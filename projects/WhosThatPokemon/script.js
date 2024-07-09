var pokemonName = document.getElementById("pokemonName");
var pokemonImage = document.getElementById("pokemonImage");

fetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  )
    .then((response) => response.json())
    .then((data) => {
        pokemonName.innerHTML = data.name;
    });