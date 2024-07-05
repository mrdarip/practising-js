var projectsRoutes = [
 "../projects/SampleProject/"
]

for(let project of projectsRoutes){
    let card = document.createElement('article')
    card.className = 'card'
    card.innerHTML = `
        <h3>${"project.name"}</h3>
        <p>${"project.description"}</p>
        <a href="${"project.link"}">Link</a>
    `
    document.getElementById('projects').appendChild(card)
}