var projectsRoutes = [
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
  "../projects/SampleProject/",
];

for (let projectRoute of projectsRoutes) {
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
        <a href="${projectRoute + "index.html"}">Link</a>
    `;
      document.getElementById("projects").appendChild(card);
    })
    .catch((e) => console.error(e));
}