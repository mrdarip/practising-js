var myInput = document.getElementById("myInput");

myInput.addEventListener("input", function () {
  let text = myInput.value;
  if (text.length === 0) return;

  createCharParticle(text[text.length - 1]);
});

function createCharParticle(character) {
  let charParticle = document.createElement("div");
  charParticle.innerText = character;
  charParticle.style.position = "absolute";
  charParticle.style.left = (myInput.offsetLeft+myInput.offsetWidth) + "px";
  charParticle.style.top = (myInput.offsetTop + myInput.offsetHeight) + "px";
  document.body.appendChild(charParticle);

  let liveLoop = setInterval(function () {
    let x = parseInt(charParticle.style.left);
    let y = parseInt(charParticle.style.top);
    charParticle.style.left = x - 1 + "px";
    charParticle.style.top = y + 1 + "px";
  }, 1000 / 60);

  setTimeout(function () {
    window.clearInterval(liveLoop);
    charParticle.remove();
  }, 5000);
}
