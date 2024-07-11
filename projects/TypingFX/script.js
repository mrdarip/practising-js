var myInput = document.getElementById("myInput");

myInput.addEventListener("input", function () {
  let text = myInput.value;
  if (text.length === 0) return;

  createCharParticle(text[text.length - 1]);
});

function createCharParticle(character) {
  let charParticle = document.createElement("div");
  charParticle.innerText = character;

  setGravityEffect(charParticle);

  document.body.appendChild(charParticle);
}

function setGravityEffect(node) {
  node.style.position = "absolute";
  node.style.left = myInput.offsetLeft + myInput.offsetWidth + "px";
  node.style.top = myInput.offsetTop + myInput.offsetHeight + "px";

  let lifeTime = 0;
  let xSpeed = 1 + Math.random() * 2;

  let liveLoop = setInterval(function () {
    let x = parseInt(node.style.left);
    let y = parseInt(node.style.top);

    let a = lifeTime / 100;

    node.style.left = x + xSpeed + "px";
    node.style.top = y + a + "px";

    lifeTime += 1000 / 60;
  }, 1000 / 60);

  setTimeout(function () {
    window.clearInterval(liveLoop);
    node.remove();
  }, 5000);
}
