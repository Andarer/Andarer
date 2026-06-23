async function loadData() {

const response =
await fetch("./meta_info.json");

const data =
await response.json();

renderProjects(data.projects);

}

function renderProjects(projects){

const grid =
document.getElementById("projects-grid");

grid.innerHTML = "";

projects.forEach(project => {

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${project.title}</h3>

<p>${project.description}</p>

<div class="card-details">

<p>${project.status}</p>

<div class="buttons">

<a href="${project.github}"
target="_blank">
GitHub
</a>

<a href="${project.website}"
target="_blank">
Website
</a>

</div>

</div>
`;

card.addEventListener("click", () => {

card.classList.toggle("expanded");

});

grid.appendChild(card);

});

}

loadData();