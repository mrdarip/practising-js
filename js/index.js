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

projectsRoutes.forEach(function (projectRoute, i) {
  fetch(projectRoute + "info.json")
    .then((res) => res.text())
    .then((text) => {
      project = JSON.parse(text);

      let card = document.createElement("article");

      card.className = "card";
      card.innerHTML = `
        <img src="${project["thumbnail"]}" alt="${project["name"]}">
        <h3>${project["name"]}</h3>
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
