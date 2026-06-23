const projects = [
{
name:"MetaBuilder",
description:"Конструктор цифровых проектов",
github:"https://github.com/Andarer/MetaBuilder",
website:"https://andarer.github.io/MetaBuilder",
status:"🟢 Active"
},

{
name:"MetaSchedule",
description:"Планирование и автоматизация",
github:"https://github.com/Andarer/MetaSchedule-Engine",
website:"https://andarer.github.io/MetaSchedule-Engine",
status:"🟢 Active"
},

{
name:"GAME HUB",
description:"Игровая платформа",
github:"https://github.com/Andarer/-GAME-HUB---",
website:"https://andarer.github.io/-GAME-HUB---",
status:"🟡 Development"
}
];

const grid = document.getElementById("projects-grid");

projects.forEach(project => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${project.name}</h3>
<p>${project.description}</p>
`;

card.onclick = () => {
openProject(project);
};

grid.appendChild(card);

});

function openProject(project){

document.getElementById("modal-title").innerText =
project.name;

document.getElementById("modal-description").innerText =
project.description;

document.getElementById("modal-status").innerText =
project.status;

document.getElementById("github-btn").href =
project.github;

document.getElementById("website-btn").href =
project.website;

document.getElementById("modal").style.display =
"flex";

}

function closeModal(){

document.getElementById("modal").style.display =
"none";

}
