var projectsNames = ["SampleProject", "Whack-A-Mole", "Jokes"];

let launchingOnGithubPages = window.location.hostname === "mrdarip.github.io";

projectsNames = projectsNames.map(
  (ProjectName) =>
    "../" +
    (launchingOnGithubPages ? "practising-js/" : "") +
    "projects/" +
    ProjectName +
    "/"
);

var cards = [];
projectsNames.forEach(function (projectRoute, i) {
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

sortByChildText(2, false);

let orderForm = document.getElementById("order");
addEventListener("change", function () {
  let selected = orderForm.selectedIndex;
  let options = orderForm.options;
  console.log(options[selected].value);

  switch (options[selected].value) {
    case "AZ":
      sortByChildText(1, true);
      break;
    case "ZA":
      sortByChildText(1, false);
      break;
    case "newest":
      sortByChildText(2, false);
      break;
    case "oldest":
      sortByChildText(2, true);
      break;
  }

  updateCardeOrder();
});

function sortByChildText(id, asc) {
  cards.sort((a, b) => {
    return compareChildrenText(a, b, id, asc);
  });
}

function compareChildrenText(a, b, index, asc) {
  if (asc) {
    return a.children[index].innerText.localeCompare(
      b.children[index].innerText
    );
  } else {
    return b.children[index].innerText.localeCompare(
      a.children[index].innerText
    );
  }
}

function updateCardeOrder() {
  cards.forEach((card, i) => {
    card.style.order = i;
  });
}
