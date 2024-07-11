const epicPath = "m 91.198407,137.95155 c 1.553792,3.14715 2.076904,6.18027 2.079104,9.69008 -0.01753,3.62288 -0.894747,7.18987 -2.559534,10.40764 2.556375,-1.91402 5.660755,-2.9547 8.85424,-2.9683 2.972453,6.4e-4 5.876573,0.89159 8.337993,2.55799 -0.95366,-2.45907 -1.45201,-5.07113 -1.47071,-7.70858 1.2e-4,-12.00962 9.73582,-21.74532 21.74544,-21.74544 12.00962,1.2e-4 21.74532,9.73582 21.74544,21.74544 1.6e-4,12.00983 -9.73561,21.74584 -21.74544,21.74596 -5.19683,-0.002 -10.22096,-1.8659 -14.16244,-5.25291 0.28389,1.15733 0.42772,2.34458 0.4284,3.53622 4e-5,8.21728 -6.6614,14.87872 -14.878683,14.87868 -8.217283,4e-5 -14.878716,-6.6614 -14.878679,-14.87868 0.01246,-1.84319 0.367295,-3.66803 1.046448,-5.38158 -4.201813,3.82026 -9.673685,5.94224 -15.352551,5.95364 -12.641819,-5e-5 -22.890025,-10.24826 -22.890076,-22.89008 0.01543,-9.17468 5.507483,-17.45375 13.954187,-21.0354 -1.273421,-2.83247 -1.933649,-5.90216 -1.937349,-9.00772 -2.53e-4,-12.16818 9.864068,-22.032501 22.032247,-22.03225 12.167976,3.6e-5 22.031976,9.86427 22.031726,22.03225 -0.007,8.53381 -4.941572,16.29606 -12.703372,19.94591 -5.849413,3.04876 -12.705729,4.24748 -17.284423,-0.41674 -5.911736,-6.02215 -4.898613,-15.90447 1.078247,-21.48162 7.366598,-6.87394 19.14662,-5.57637 25.716298,1.71772 7.84106,8.70563 6.2569,22.39229 -2.357168,29.95098 -10.041509,8.81124 -25.64025,6.93922 -34.185672,-2.99664 -9.783461,-11.37535 -7.622773,-28.88977 3.63611,-38.42035 12.707827,-10.757109 32.140402,-8.307209 42.65503,4.27557 11.73178,14.03934 8.99228,35.39188 -4.91504,46.88972 -7.277898,6.01698 -16.866156,8.84132 -26.247115,7.88923"

document.querySelectorAll("input").forEach(function (input, i) {
  input.addEventListener("input", function () {
    let text = input.value;
    if (text.length === 0) return;

    createCharParticle(text[text.length - 1], this, i);
  });
});

function createCharParticle(character, parent, effectIndex) {
  let charParticle = document.createElement("div");
  charParticle.innerText = character;

  switch (effectIndex) {
    case 0:
      setGravityEffect(charParticle, parent);
      break;
    default:
      setFollowPathEffect(charParticle, epicPath);
  }

  document.body.appendChild(charParticle);
}

function setGravityEffect(node, parent) {
  node.style.position = "absolute";
  node.style.left = parent.offsetLeft + parent.offsetWidth + "px";
  node.style.top = parent.offsetTop + parent.offsetHeight + "px";

  let lifeTime = 0;
  let xSpeed = 1 + Math.random() * 2;

  let liveLoop = setInterval(function () {
    let x = parseInt(node.style.left);
    let y = parseInt(node.style.top);

    let a = lifeTime / 100;

    node.style.left = x + xSpeed + "px";
    node.style.top = y + a + "px";

    lifeTime += 1000 / 25;
  }, 1000 / 25);

  setTimeout(function () {
    window.clearInterval(liveLoop);
    node.remove();
  }, 1500);
}

function setFollowPathEffect(node, path) {
  node.style.position = "absolute";
  node.style.top = "0%";
  node.style.left = "0%";
  node.style.offsetPath = `path("${path}")`;

  node.style.animation = "travel 2s linear";

  node.onanimationend = function () {
    node.remove();
  };
}
