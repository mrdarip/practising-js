const setup = document.getElementById("setup");
const next = document.getElementById("next");
const delivery = document.getElementById("delivery");

const skipTexts = [
  "skip",
  "next",
  "another one",
  "more",
  "refresh",
  "new",
  "next joke",
  "another joke",
  "more jokes",
  "refresh joke",
  "new joke",
  "haha, next one",
  "that was good, next one",
  "that was bad, next one",
  "that was funny, next one",
  "that was not funny, next one",
  "that was hilarious, next one",
  "that was boring, next one",
  "that was interesting, next one",
  "that was stupid, next one",
  "that was dumb, next one",
  "that was smart, next one",
  "that was clever, next one",
  "that was lame, next one",
  "that was cool, next one",
  "that was awesome",
];
const showTexts = [
  "show me",
  "show",
  "reveal",
  "display",
  "tell me",
  "tell",
  "show punchline",
  "show delivery",
  "show me punchline",
  "show me delivery",
  "show me the punchline",
  "show me the delivery",
  "show punchline now",
  "show delivery now",
  "show me punchline now",
  "idk, show me",
  "idk, show",
  "idk, reveal",
  "idk, display",
  "idk, tell me",
  "idk, tell",
  "idk, show punchline",
  "idk, show delivery",
  "idk, show me punchline",
  "idk, show me delivery",
  "idk, show me the punchline",
  "idk, show me the delivery",
  "idk, show punchline now",
  "idk, show delivery now",
  "idk, show me punchline now",
  "idk, show me delivery now",
  "show me the punchline",
  "show me the delivery",
];

refreshJoke();
var showingDelivery = false;

next.addEventListener("click", () => {
  if (showingDelivery) {
    refreshJoke();
  } else {
    delivery.style.display = "block";
    next.innerHTML = skipTexts[Math.floor(Math.random() * skipTexts.length)];
  }

  showingDelivery = !showingDelivery;
});

function refreshJoke() {
  fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart"
  )
    .then((response) => response.json())
    .then((data) => {
      next.innerHTML = showTexts[Math.floor(Math.random() * showTexts.length)];

      delivery.style.display = "none";

      setup.innerHTML = data.setup;
      delivery.innerHTML = data.delivery;
    });
}
