const molesEmojis = ["🐀", "🦡", "🐁"];
const nonMoleEmojis = ["🕳", "🥔"];
const allEmojis = [...molesEmojis, ...nonMoleEmojis];

const gameBoard = document.getElementsByTagName("main")[0];

insertMole();
insertMole();
insertMole();

function insertMole() {
  const mole = document.createElement("p");
  mole.innerText = allEmojis[Math.floor(Math.random() * allEmojis.length)];
  mole.classList.add("mole");

  mole.style.left = `${ Math.random() * 100}%`;
  mole.style.top = `${ Math.random() * 100}%`;

  gameBoard.appendChild(mole);

  mole.addEventListener("click", () => {
    if (molesEmojis.includes(mole.innerText)) {
      mole.remove();
      insertMole();
    } else {
      alert("Game Over");
      location.reload();
    }
  });

  setTimeout(() => {
    if (mole.parentNode === gameBoard) {
      mole.remove();
      insertMole();
    }
  }, 2000 + Math.random() * 2000);
}
