var myInput = document.getElementById("myInput");

myInput.addEventListener("input", function () {
  let text = myInput.value;
  if (text.length === 0) return;

  createCharParticle(text[text.length - 1]);
});

function createCharParticle(character) {
  let charParticle = document.createElement("div");
  charParticle.innerText = character;

  setFollowPathEffect(charParticle, "M 100 300 Q 150 150 200 300 Q 250 400 300 300 Q 350 150 400 300 C 450 550 400 500 350 450 C 250 300 500 250 600 300 A 50 50 0 1 1 550 400 ");

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

function setFollowPathEffect(node, path){
  node.style.position= "absolute";
  node.style.top= "0%";
  node.style.left= "0%";
  node.style.offsetPath = `path("${path}")`;

  node.style.animation= "travel 2s infinite alternate linear";
}