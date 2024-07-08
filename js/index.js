var projectsRoutes = ["SampleProject", "Whack-A-Mole", "Jokes"];

let launchingOnGithubPages = window.location.hostname === "mrdarip.github.io";

projectsRoutes = projectsRoutes.map(
  (route) =>
    "../" +
    (launchingOnGithubPages ? "practising-js/" : "") +
    "projects/" +
    route +
    "/"
);

var cards = [];
projectsRoutes.forEach(function (projectRoute, i) {
  fetch(projectRoute + "info.json")
    .then((res) => res.text())
    .then((text) => {
      project = JSON.parse(text);

      let card = document.createElement("article");
      cards.push(card);

      card.className = "card";
      card.innerHTML = `
        <img src="${project["thumbnail"]}" alt="${project["name"]}">
        <h3>${project["name"]}</h3>
        <p class="createdDate">${project["createdDate"]}</p>
        <p>${project["description"]}</p>
        
    `;

      card.style.order = i;

      card.onclick = function () {
        window.location.href = projectRoute + "index.html";
      };

      document.getElementById("projects").appendChild(card);
    })
    .catch((e) => console.error(e));
});

let orderForm = document.getElementById("order");
addEventListener("change", function () {
  let selected = orderForm.selectedIndex;
  let options = orderForm.options;
  console.log(options[selected].value);

  switch (options[selected].value) {
    case "AZ":
      cards.sort((a, b) => {
        return sortByChildText(a, b, 1, true);
      });
      break;
    case "ZA":
      cards.sort((a, b) => {
      return sortByChildText(a, b, 1, false);
      });
      break;
    case "newest":
      cards.sort((a, b) => {
        return sortByChildText(a, b, 2, false);
      });
      break;
    case "oldest":
      cards.sort((a, b) => {
        return sortByChildText(a, b, 2, true);
      });
      break;
  }

  updateCardeOrder();
});

function sortByChildText(a, b, index, asc) {
  if (asc) {
    return a.children[index].innerText.localeCompare(b.children[index].innerText);
  } else {
    return b.children[index].innerText.localeCompare(a.children[index].innerText);
  }
}

function updateCardeOrder() {
  cards.forEach((card, i) => {
    card.style.order = i;
  });
}
